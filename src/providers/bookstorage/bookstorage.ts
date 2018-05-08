import { LivrosStorageProvider } from './../livrosstorage/livrosstorage';
import { Injectable } from '@angular/core';
import { BookDetail } from '../../models/book-detail';

@Injectable()
export class BookStorageProvider {
  private PATH_BOOKS_READING: string = 'booksreading';

  constructor(private storage: LivrosStorageProvider) { }

  getAll() {
    return this.storage.getAll(this.PATH_BOOKS_READING);
  }

  add(bookToAdd: BookDetail) {
    return this.storage.add(this.PATH_BOOKS_READING, bookToAdd);
  }

  remove(bookToRemove: BookDetail) {
    return this.storage.remove(this.PATH_BOOKS_READING, bookToRemove);
  }
}
