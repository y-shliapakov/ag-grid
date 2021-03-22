import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<HttpResponse<IVideo>>', (done) => {
    service.get().subscribe( data => {
      expect(data).toBeDefined();
      expect(data.status).toBe(200);
      done();
    }, err => {
      // youtube api has request limit so this test check is problem with that
      //
      expect(err.status).toBe(403);
      done();
    });
  });
});
