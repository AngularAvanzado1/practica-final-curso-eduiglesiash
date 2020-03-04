import { MetaDataPage } from './metaDataPage.interface';

export interface Region {
  id?: string;
  code: string;
  iso2code: string;
  name?: string;
}

export interface Regions {
  metaDataPage: MetaDataPage;
  regions: Region[];
}
