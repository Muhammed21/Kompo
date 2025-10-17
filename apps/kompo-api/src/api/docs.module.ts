import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocsController } from '../docs/presentation/http/docs.controller';
import { GetOneDocsUseCase } from '../docs/core/application/useCases/get-one-docs.use-case';
import { DocsRepository } from '../docs/core/application/port/docs.repository';
import { SanityDocsRepository } from '../docs/infrastructure/sanity/sanity-docs.repository';

@Module({
  imports: [ConfigModule],
  controllers: [DocsController],
  providers: [
    GetOneDocsUseCase,
    {
      provide: DocsRepository,
      useClass: SanityDocsRepository,
    },
  ]
})
export class DocsModule {}
