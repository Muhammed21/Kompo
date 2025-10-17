import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { A11yController } from '../a11y/presentation/http/a11y.controller';
import { A11yRepository } from '../a11y/core/application/port/a11y.repository';
import { A11yUseCase } from '../a11y/core/application/useCases/a11y.use-case';
import { A11yAccessibilityRepository } from '../a11y/infrastructure/a11y/a11y-accessibility.repository';
import { DocsModule } from './docs.module';

@Module({
  imports: [ConfigModule],
  controllers: [A11yController],
  providers: [
    A11yUseCase,
    {
      provide: A11yRepository,
      useClass: A11yAccessibilityRepository,
    },
  ],
})
export class A11yModule {}
