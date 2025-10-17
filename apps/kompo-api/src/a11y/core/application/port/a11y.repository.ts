import { AccessibilityScanDto, GetDocsWithIdInterface } from '@kompo/types';

export abstract class A11yRepository {
  abstract SerializeSanityBody(
    dto: AccessibilityScanDto,
  ): Promise<GetDocsWithIdInterface>;
}
