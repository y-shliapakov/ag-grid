import { IThumbnails } from './thumbnails.model';

export interface ISnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: IThumbnails;
  title: string;
}

export class Snippet implements ISnippet {
  constructor(
    public channelId: string,
    public channelTitle: string,
    public description: string,
    public liveBroadcastContent: string,
    public publishTime: string,
    public publishedAt: string,
    public thumbnails: IThumbnails,
    public title: string,
  ) { }
}
