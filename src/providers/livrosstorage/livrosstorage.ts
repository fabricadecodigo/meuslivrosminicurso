import { BookDetail } from './../../models/book-detail';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LivrosStorageProvider {

  constructor(private storage: Storage) { }

  getAll(path: string) {
    return new Promise((resolve, reject) => {
      this.storage.get(path)
        .then((books: BookDetail[]) => {
          resolve(books)
        })
        .catch(() => reject());
    });
  }

  add(path: string, bookToAdd: BookDetail) {
    return this.getAll(path)
      .then((books: BookDetail[]) => {
        if (!books) {
          books = [];
        }

        const book = this.getFromList(books, bookToAdd.id);

        if (!book) {
          books.push(bookToAdd);
          return this.save(path, books);
        }
      });
  }

  remove(path: string, bookToRemove: BookDetail) {
    return this.getAll(path)
      .then((books: BookDetail[]) => {
        const book = this.getFromList(books, bookToRemove.id);

        const index = books.indexOf(book);
        books.splice(index, 1);

        return this.save(path, books);
      });
  }

  save(path: string, books: BookDetail[]) {
    return this.storage.set(path, books);
  }

  getFromList(books: BookDetail[], id: string) {
    const book = books.filter((book: BookDetail) => {
      return book.id == id;
    });

    if (book.length > 0) {
      return book[0];
    }

    return null;
  }
}
