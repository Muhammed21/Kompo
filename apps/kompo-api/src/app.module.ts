import { Module } from '@nestjs/common';
import { DocsModule } from './api/docs.module';
import { ConfigModule } from '@nestjs/config';
import { A11yModule } from './api/a11y.module';

@Module({
  imports: [DocsModule, A11yModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
