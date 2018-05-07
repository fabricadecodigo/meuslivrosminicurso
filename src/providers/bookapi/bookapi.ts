import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookApiProvider {
  url: string = 'https://www.googleapis.com/books/v1';

  constructor(public http: HttpClient) { }

  filter(term: string) {
    const params = new HttpParams().set('q', term);
    return this.http.get(this.url + '/volumes', { params: params });
  }

  get(id: string) {
    return this.http.get(this.url + `/volumes/${id}`);
  }


}
