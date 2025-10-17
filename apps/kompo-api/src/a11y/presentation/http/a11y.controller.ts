import { Controller, Get, Query } from '@nestjs/common';
import { A11yRepository } from '../../core/application/port/a11y.repository';
import { AccessibilityScanDto, GetDocsWithIdInterface } from '@kompo/types';

@Controller('a11y')
export class A11yController {
  constructor(private readonly repository: A11yRepository) {}

  @Get()
  async serializeSanityBody(
    @Query() query: AccessibilityScanDto,
  ): Promise<GetDocsWithIdInterface> {
    return this.repository.SerializeSanityBody({ url: query.url });
  }
}
