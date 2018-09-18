import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, {
      headers: {
        'Content-Type':  'application/json',
        'user-key': 'c87577275c918b1a42dac880f60f87b6'
      },
      params
    });
  }

  handleError(error): void {
    console.log('error ', error);
  }
}
