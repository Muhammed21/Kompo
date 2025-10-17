import { Controller, Get, Param } from '@nestjs/common';
import { GetDocsWithIdDto, GetDocsWithIdInterface } from '@kompo/types';
import { DocsRepository } from '../../core/application/port/docs.repository';

@Controller('docs')
export class DocsController {
  constructor(private readonly repository: DocsRepository) {}

  @Get(':id')
  async getOneDocs(@Param('id') id: string): Promise<GetDocsWithIdInterface> {
    return this.repository.getOneDocs({ id } as GetDocsWithIdDto);
  }

  @Get()
  async getAllDocs(): Promise<GetDocsWithIdInterface[]> {
    return this.repository.getAllDocs();
  }
}
