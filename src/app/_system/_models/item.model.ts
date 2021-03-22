import { IItemId } from './item-id.model';
import { ISnippet } from './snippet.model';

export interface IItem {
  etag: string;
  id: IItemId;
  kind: string;
  snippet: ISnippet;
}

export class Item implements IItem {
  constructor(
    public etag: string,
    public id: IItemId,
    public kind: string,
    public snippet: ISnippet
  ) { }
}
