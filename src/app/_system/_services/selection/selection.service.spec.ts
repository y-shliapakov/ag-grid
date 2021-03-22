import { TestBed } from '@angular/core/testing';

import { SelectionService } from './selection.service';

describe('SelectionService', () => {
  let service: SelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit number data to totalRecords Subject', (done) => {
    const fakeCount = 50;
    service.totalRecords$.next(fakeCount);
    service.totalRecords$.subscribe((value) => {
      expect(value).toBe(50);
      done();
    });
  });

  it('should emit string data to selectedRecords$ Subject', (done) => {
    const fakeString = 'change';
    service.selectedRecords$.next(fakeString);
    service.selectedRecords$.subscribe((value) => {
      expect(value).toBe('change');
      done();
    });
  });

  it('should emit boolean data to selectionMode Subject', (done) => {
    const fakeBoolean = true;
    service.selectionMode$.next(fakeBoolean);
    service.selectionMode$.subscribe((value) => {
      expect(value).toBe(true);
      done();
    });
  });
});
