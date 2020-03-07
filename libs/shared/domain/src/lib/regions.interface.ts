import { MetaDataPage } from './metadata-page.interface';

export interface Region {
  code?: string;
  iso2code: string;
  id?: string;
  name?: string;
}

export interface Regions {
  metaDataPage: MetaDataPage;
  regions: Region[];
}
