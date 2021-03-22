export interface IPageInfo {
  resultsPerPage: number;
  totalResults: number;
}

export class PageInfo implements IPageInfo {
  constructor(
    public resultsPerPage: number,
    public totalResults: number
  ) { }
}
