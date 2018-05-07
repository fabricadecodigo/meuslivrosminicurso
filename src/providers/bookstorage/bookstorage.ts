import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BookDetail } from '../../models/book-detail';

@Injectable()
export class BookstorageProvider {
  private PATH_BOOKS_READING: string = 'booksreading';

  constructor(private storage: Storage) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.storage.get(this.PATH_BOOKS_READING)
        .then((books: BookDetail[]) => {
          resolve(books)
        })
        .catch(() => reject());
    });
  }

  add(bookToAdd: BookDetail) {
    return this.getAll()
      .then((books: BookDetail[]) => {
        if (!books) {
          books = [];
        }

        const book = this.getFromList(books, bookToAdd.id);

        if (!book) {
          books.push(bookToAdd);
          return this.save(books);
        }
      });
  }

  remove(bookToRemove: BookDetail) {
    return this.getAll()
      .then((books: BookDetail[]) => {
        const index = books.indexOf(bookToRemove);
        books.slice(index, 0);

        return this.save(books);
      });
  }

  private save(books: BookDetail[]) {
    return this.storage.set(this.PATH_BOOKS_READING, books);
  }

  private getFromList(books: BookDetail[], id: string) {
    const book = books.filter((book: BookDetail) => {
      return book.id = id;
    });

    if (book.length > 0) {
      return book[0];
    }

    return null;
  }

}
