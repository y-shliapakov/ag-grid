import { TestBed } from '@angular/core/testing';

import { AgGridService } from './ag-grid.service';
import { GridOptions } from 'ag-grid-community';

describe('AgGridService', () => {
  let service: AgGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get options', () => {
    service.options = initFakeOptions();
    expect(service.options).toEqual(initFakeOptions());
  });
});

function initFakeOptions(): GridOptions {
  return  {
    allowContextMenuWithControlKey: true,
    rowHeight: 50,
  };
}
