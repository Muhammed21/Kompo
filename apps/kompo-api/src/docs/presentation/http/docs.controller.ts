import { Controller, Get, Param } from '@nestjs/common';
import {
  GetAllSlug,
  GetDocsWithIdDto,
  GetDocsWithIdInterface,
} from '@kompo/types';
import { DocsRepository } from '../../core/application/port/docs.repository';

@Controller('docs')
export class DocsController {
  constructor(private readonly repository: DocsRepository) {}

  @Get('all')
  async getAllDocs(): Promise<GetDocsWithIdInterface[]> {
    return this.repository.getAllDocs();
  }

  @Get('slugs/all')
  async getAllSlugs(): Promise<GetAllSlug[]> {
    return this.repository.getAllSlugs();
  }

  @Get(':param')
  async getOneDocs(
    @Param() param: GetDocsWithIdDto,
  ): Promise<GetDocsWithIdInterface> {
    return this.repository.getOneDocs(param);
  }
}
