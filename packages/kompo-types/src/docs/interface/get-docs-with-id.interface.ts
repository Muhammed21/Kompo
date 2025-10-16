import { GetDocsWithIdDto } from "../dto/get-docs-with-id.dto";

export interface GetDocsWithIdInterface extends GetDocsWithIdDto {
  title: string;
  slug: string;
  description?: string;
  body: {
    _key: string;
    style: string;
    children: {
      _key: string;
      text: string;
      style: string;
    };
  }[];
}
