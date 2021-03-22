import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridComponent } from './ag-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { IItem } from '../../_system/_models/item.model';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return video thumbnails img by initThumbnailsView()', () => {
    const fakeUrl = 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg';
    const expectedResult = `<img src="${fakeUrl}" style="width: 120px; height: 90px">`;
    expect(component.initThumbnailsView(fakeVideo())).toEqual(expectedResult);
  });

  it('should return video title link by initTitleLink()', () => {
    const fakeId = '3fumBcKC6RE';
    const fakeTitle = 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)';
    const expectedResult = `<a style="color: #f44336" href="https://www.youtube.com/watch?v=${fakeId}" target="_blank">${fakeTitle}</a>`;
    expect(component.initTitleLink(fakeVideo(), fakeVideo().snippet.title)).toEqual(expectedResult);
  });

  it('should return localeString Date by formatDate()', () => {
    // const day = new Date('2011-05-12T20:01:31Z').toLocaleString(); // fakeDay below - its result of this code;
    //
    const fakeDay = '12.05.2011, 23:01:31';
    expect(component.dateFormat(fakeVideo().snippet.publishedAt)).toEqual(fakeDay);
  });

  it('should return context menu items or null by getContextMenuItems()', () => {
    const fakeResult = component.getContextMenuItems(fakeParams());
    if (fakeParams()) {
      expect(fakeResult[0].name).toEqual(fakeContextMenu().name);
    }
    else {
      expect(component.getContextMenuItems(fakeResult)).toEqual(null);
    }
  });
});

function fakeParams(): any {
  return {
    column: {
      getColId(): string{
        return 'title';
      }
    }
  };
}

function fakeContextMenu(): any {
  return {
    name: 'Open in new tab',
    action: new Function()
  };
}


function fakeVideo(): IItem {
  return {
    kind: 'youtube#searchResult',
    etag: 'GD8FYTqnmdxZdVOnzeMh2zCCKMc',
    id: {
      kind: 'youtube#video',
      videoId: '3fumBcKC6RE'
    },
    snippet: {
      publishedAt: '2011-05-12T20:01:31Z',
      channelId: 'UCEOhcOACopL42xyOBIv1ekg',
      title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
      description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'LilWayneVEVO',
      liveBroadcastContent: 'none',
      publishTime: '2011-05-12T20:01:31Z'
    }
  };
}
