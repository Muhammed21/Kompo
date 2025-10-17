import { Injectable } from '@nestjs/common';
import { GetDocsWithIdInterface, GetDocsWithIdDto } from '@kompo/types';
import { DocsRepository } from '../port/docs.repository';

@Injectable()
export class GetOneDocsUseCase {
  constructor(private readonly repository: DocsRepository) {}

  async execute(dto: GetDocsWithIdDto): Promise<GetDocsWithIdInterface> {
    return this.repository.getOneDocs(dto);
  }
}
