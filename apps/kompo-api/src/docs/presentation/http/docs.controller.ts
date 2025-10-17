import { Controller, Get, Param } from '@nestjs/common';
import { GetDocsWithIdDto, GetDocsWithIdInterface } from '@kompo/types';
import { DocsRepository } from '../../core/application/port/docs.repository';

@Controller('docs')
export class DocsController {
  constructor(private readonly repository: DocsRepository) {}

  @Get(':param')
  async getOneDocs(
    @Param() param: GetDocsWithIdDto,
  ): Promise<GetDocsWithIdInterface> {
    return this.repository.getOneDocs(param);
  }

  @Get()
  async getAllDocs(): Promise<GetDocsWithIdInterface[]> {
    return this.repository.getAllDocs();
  }
}
