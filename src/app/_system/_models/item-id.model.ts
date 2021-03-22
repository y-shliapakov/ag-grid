export interface IItemId {
  kind: string;
  videoId: string;
}

export class ItemId implements IItemId {
  constructor(
    public kind: string,
    public videoId: string
  ) { }
}
