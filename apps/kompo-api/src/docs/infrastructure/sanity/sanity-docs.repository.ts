import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetDocsWithIdDto, GetDocsWithIdInterface } from '@kompo/types';
import { DocsRepository } from '../../core/application/port/docs.repository';
import { sanityClient } from '../../../shared/infrastructure/sanity-client';

@Injectable()
export class SanityDocsRepository implements DocsRepository {
  private readonly logger = new Logger(SanityDocsRepository.name);

  constructor(private readonly configService: ConfigService) {}

  async getOneDocs(dto: GetDocsWithIdDto): Promise<GetDocsWithIdInterface> {
    const client = sanityClient(this.configService);
    const query = `*[_type == "docs" && (_id == $param || slug.current == $param)][0]{_id, _createdAt, title, description, body, slug}`;
    const param = { param: dto.param };

    try {
      const result: GetDocsWithIdInterface = await client.fetch(query, param);

      if (!result) {
        this.logger.warn(`Document not found for id: ${dto.param}`);
        throw new NotFoundException(
          `Document avec le parametre ${dto.param} non trouvé.`,
        );
      }

      return result;
    } catch (error) {
      const err = error as Error;
      this.logger.error(
        `Failed to fetch doc with id ${dto.param}`,
        err.stack || err.message,
      );
      throw new InternalServerErrorException(
        'Erreur lors de la récupération du document.',
      );
    }
  }

  async getAllDocs(): Promise<GetDocsWithIdInterface[]> {
    const client = sanityClient(this.configService);
    const query = `*[_type == "docs"]{_id, _createdAt, title, description, body, slug}`;
    try {
      const result: GetDocsWithIdInterface[] = await client.fetch(query);

      if (!result) {
        this.logger.warn(`Documents not found`);
        throw new NotFoundException(`Documents non trouvé.`);
      }

      return result;
    } catch (error) {
      const err = error as Error;
      this.logger.error('Failed to fetch all docs', err.stack || err.message);
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des documents.',
      );
    }
  }
}
