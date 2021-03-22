export interface IThumbnailsView {
  height: number;
  width: number;
  url: string;
}

export class ThumbnailsView implements IThumbnailsView {
  constructor(
    public height: number,
    public width: number,
    public url: string
  ) { }
}
