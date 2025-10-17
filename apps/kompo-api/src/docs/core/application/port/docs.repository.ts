import { GetDocsWithIdDto, GetDocsWithIdInterface } from '@kompo/types';

export abstract class DocsRepository {
  abstract getOneDocs(dto: GetDocsWithIdDto): Promise<GetDocsWithIdInterface>;
  abstract getAllDocs(): Promise<GetDocsWithIdInterface[]>;
}
