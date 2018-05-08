import { BookDetail } from './../../models/book-detail';
import { LivrosStorageProvider } from './../livrosstorage/livrosstorage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LivrosLidoStorageProvider {
  private PATH_LIVROS_LIDOS: string = 'livros-lidos';

  constructor(private storage: LivrosStorageProvider) { }

  getAll() {
    return this.storage.getAll(this.PATH_LIVROS_LIDOS);
  }

  add(bookToAdd: BookDetail) {
    return this.storage.add(this.PATH_LIVROS_LIDOS, bookToAdd);
  }

  remove(bookToRemove: BookDetail) {
    return this.storage.remove(this.PATH_LIVROS_LIDOS, bookToRemove);
  }
}
