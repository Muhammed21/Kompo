import { A11yRepository } from '../port/a11y.repository';
import { AccessibilityScanDto, GetDocsWithIdInterface } from '@kompo/types';

export class A11yUseCase {
  constructor(private readonly repository: A11yRepository) {}

  async execute(dto: AccessibilityScanDto): Promise<GetDocsWithIdInterface> {
    return this.repository.SerializeSanityBody(dto);
  }
}
