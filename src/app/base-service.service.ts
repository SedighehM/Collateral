import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseServiceService {
  constructor(public httpClient: HttpClient) {}
  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  post(url: string, item: any): Observable<any> {
    return this.httpClient.post(url, item);
  }
  delete(url: string, id: number): Observable<any> {
    return this.httpClient.delete(url+id);
  }
  put(url: string, id: number,item:any): Observable<any> {
    return this.httpClient.put(url+id,item);
  }
}
