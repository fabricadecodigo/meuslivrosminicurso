import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LivrosApiProvider {
  url: string = 'https://www.googleapis.com/books/v1';

  constructor(private http: HttpClient) { }

  filtrar(termo: string) {
    const params = new HttpParams().set('q', termo);
    return this.http.get(this.url + '/volumes', { params: params });
  }

  recuperar(id: string) {
    return this.http.get(this.url + `/volumes/${id}`);
  }
}
