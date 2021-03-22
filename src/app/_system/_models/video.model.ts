import { IItem } from './item.model';
import { IPageInfo } from './page-info.model';

export interface IVideo {
  etag?: string;
  items?: IItem[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: IPageInfo;
  regionCode?: string;
}

export class Video implements IVideo{
  constructor(
    public etag?: string,
    public items?: IItem[],
    public kind?: string,
    public nextPageToken?: string,
    public pageInfo?: IPageInfo,
    public regionCode?: string
  ){ }
}
