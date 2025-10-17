import { GetDocsWithIdInterface } from '@kompo/types';
import { DocsRepository } from '../port/docs.repository';

export class GetAllDocsUseCase {
  constructor(private readonly repository: DocsRepository) {}

  async execute(): Promise<GetDocsWithIdInterface[]> {
    return this.repository.getAllDocs();
  }
}
