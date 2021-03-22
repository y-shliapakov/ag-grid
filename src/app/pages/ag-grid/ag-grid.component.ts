import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColumnApi, GridOptions } from 'ag-grid-community';
import { RowCheckboxComponent } from '../../layout/custom-header/row-checkbox/row-checkbox.component';
import { ToolbarComponent } from '../../layout/toolbar/toolbar.component';
import { ColumnCheckboxComponent } from '../../layout/custom-header/column-checkbox/column-checkbox.component';
import { ApiService } from '../../_system/_services/api/api.service';
import { AgGridService } from '../../_system/_services/ag-grid/ag-grid.service';
import { SelectionService } from '../../_system/_services/selection/selection.service';
import { IItem } from '../../_system/_models/item.model';
import { IVideo, Video } from '../../_system/_models/video.model';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit, OnDestroy {

  public gridOptions: GridOptions = {};
  public rowData: IItem[];

  private columnApi: ColumnApi;
  private rowDataSubscription: Subscription;
  private selectionModeSubscription: Subscription;

  constructor(
    private api: ApiService,
    private agGridService: AgGridService,
    private selectionService: SelectionService
  ) { }

  ngOnInit(): void {
    this.initGridOptions();
    this.loadGridRows();
  }

  ngOnDestroy(): void {
    this.rowDataSubscription.unsubscribe();
    this.selectionModeSubscription.unsubscribe();
  }

  onGridReady(params): void {
    this.columnApi = params.columnApi;
    this.initSelectionMode();
  }

  loadGridRows(): void {
    this.rowDataSubscription = this.api.get().subscribe(
      video => {
        this.rowData = video.body.items;
        this.selectionService.totalRecords$.next(this.rowData.length);
      },
      error => {
        console.log(error);
      });
  }
  loadFakeGridRows(): void {
    this.rowData = this.fakeVideo().items;
    this.selectionService.totalRecords$.next(this.rowData.length);
  }

  initGridOptions(): void {
    this.gridOptions = {
      pagination: true,
      allowContextMenuWithControlKey: true,
      getContextMenuItems: this.getContextMenuItems,
      columnDefs: [
        {
          headerName: '',
          headerGroupComponent: 'toolbar',
          children: this.initColumnDefs()
        }
      ],
      frameworkComponents: {
        toolbar: ToolbarComponent,
        customHeader: ColumnCheckboxComponent
      },
    };
    this.agGridService.options = this.gridOptions;
  }

  initSelectionMode(): void {
    this.selectionModeSubscription = this.selectionService.selectionMode$.subscribe(status =>
      this.columnApi.setColumnVisible('selection-mode', status)
    );
  }

  initThumbnailsView(item: IItem): string {
    return `<img src="${item.snippet.thumbnails.default.url}" style="width: ${item.snippet.thumbnails.default.width}px; height: ${item.snippet.thumbnails.default.height}px">`;
  }

  initTitleLink(item: IItem, title): string {
    return `<a style="color: #f44336" href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">${title}</a>`;
  }

  initColumnDefs(): any {
    return [
      {
        headerName: '',
        field: 'selection-mode',
        width: 60,
        cellRendererFramework: RowCheckboxComponent,
        headerComponentFramework: ColumnCheckboxComponent,
        hide: true,
      },
      {
        headerName: '',
        field: 'thumbnails',
        width: 200,
        autoHeight: true,
        sortable: true,
        cellRenderer:  data => this.initThumbnailsView(data.data)
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        minWidth: 140,
        sortable: true,
        valueGetter: 'data.snippet.publishedAt',
        valueFormatter: data => this.dateFormat(data.data.snippet.publishedAt)
      },
      {
        headerName: 'Video Title',
        field: 'title',
        minWidth: 600,
        autoHeight: true,
        wrapText: true,
        sortable: true,
        valueGetter: 'data.snippet.title',
        cellRenderer: data => this.initTitleLink(data.data, data.data.snippet.title )
      },
      {
        headerName: 'Description',
        field: 'description',
        minWidth: 600,
        autoHeight: true,
        wrapText: true,
        sortable: true,
        valueGetter: 'data.snippet.description'
      }
    ];
  }

  getContextMenuItems(params): any{
    if (params.column.getColId() === 'title'){
      return [
        {
          name: 'Open in new tab',
          action(): void {
            const url = `https://www.youtube.com/watch?v=${params.node.data.id.videoId}`;
            window.open(url);
          }
        }
      ];
    }
    else { return null; }
  }

  dateFormat(publishedDate: string): string{
    const DATE = new Date(publishedDate);
    return DATE.toLocaleString();
  }

  fakeVideo(): IVideo {
    const videos = new Video(
      'some etag',
      [
        {
          etag: 'fakeEtag',
          id: {
            kind: 'fakeKind',
            videoId: 'fakeId'
          },
          kind: 'fakeKindMain',
          snippet: {
            title: 'fakeTitle',
            channelTitle: 'fakeChannelTitle',
            channelId: 'fakeChannelId',
            description: 'fakeDescription',
            liveBroadcastContent: 'fakeLive',
            publishedAt: new Date().toDateString(),
            publishTime: new Date().toTimeString(),
            thumbnails: {
              default: {
                height: 50,
                width: 50,
                url: 'fakeUrl'
              },
              medium: {
                height: 50,
                width: 50,
                url: 'fakeUrl'
              },
              high: {
                height: 50,
                width: 50,
                url: 'fakeUrl'
              }
            }
          }
        },
        {
          etag: 'fakeEtag',
          id: {
            kind: 'fakeKind',
            videoId: 'fakeId'
          },
          kind: 'fakeKindMain',
          snippet: {
            title: 'fakeTitle',
            channelTitle: 'fakeChannelTitle',
            channelId: 'fakeChannelId',
            description: 'fakeDescription',
            liveBroadcastContent: 'fakeLive',
            publishedAt: new Date().toDateString(),
            publishTime: new Date().toTimeString(),
            thumbnails: {
              default: {
                height: 50,
                width: 50,
                url: 'fakeUrl'
              },
              medium: {
                height: 50,
                width: 50,
                url: 'fakeUrl'
              },
              high: {
                height: 50,
                width: 50,
                url: 'fakeUrl'
              }
            }
          }
        }
      ]);
    return videos;
  }

}
