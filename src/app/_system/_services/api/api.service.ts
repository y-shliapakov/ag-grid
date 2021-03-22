import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IVideo } from '../../_models/video.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<HttpResponse<IVideo>> {
    return this.http.get(environment.apiYoutubeServiceUrl, {
      observe: 'response'
    });
  }

}
