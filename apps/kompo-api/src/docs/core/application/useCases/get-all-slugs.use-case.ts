import { DocsRepository } from '../port/docs.repository';
import { GetAllSlug } from '@kompo/types';

export class GetAllSlugsUseCase {
  constructor(private readonly repository: DocsRepository) {}

  async execute(): Promise<GetAllSlug[]> {
    return this.repository.getAllSlugs();
  }
}
