import { createClient } from '@sanity/client';
import { ConfigService } from '@nestjs/config';

export const sanityClient = (configService: ConfigService) =>
  createClient({
    projectId: configService.get('SANITY_PROJECT_ID'),
    dataset: configService.get('SANITY_DATASET'),
    apiVersion: '2025-06-29',
    useCdn: true,
  });
