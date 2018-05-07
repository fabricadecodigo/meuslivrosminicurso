import { BookstorageProvider } from './../../providers/bookstorage/bookstorage';
import { BookApiProvider } from './../../providers/bookapi/bookapi';
import { BookDetail } from './../../models/book-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html',
})
export class BookDetailPage {
  book: BookDetail;
  lido: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookApi: BookApiProvider, private bookProvider: BookstorageProvider) {
    this.book = new BookDetail();
    this.lido = false;

    if (this.navParams.data) {
      this.lido = this.navParams.data.lido || false;

      this.bookApi.get(this.navParams.data.bookId).subscribe((book: any) => {
        const bookInfo = book.volumeInfo;
        this.book.id = this.navParams.data.bookId;
        this.book.title = bookInfo.title;
        this.book.subtitle = bookInfo.subtitle;
        this.book.authors = bookInfo.authors;
        this.book.publisher = bookInfo.title;
        this.book.description = bookInfo.description;
        this.book.pageCount = bookInfo.pageCount;
        if (bookInfo.publishedDate) {
          this.book.publishedDate = this.getDateFromISOFormat(bookInfo.publishedDate);
        }
        if (bookInfo.imageLinks) {
          this.book.thumbnail = bookInfo.imageLinks.thumbnail;
        }
      });
    }


  }

  private getDateFromISOFormat(date: string) {
    const dateArr = date.split('-');
    if (dateArr.length > 1) {
      return new Date(`${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`);
    } else {
      return new Date(`${dateArr[0]}/1/1`);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailPage');
  }

  addToBookmark(book: BookDetail) {
    this.bookProvider.add(book).then(() => {
      this.navCtrl.pop();
    });
  }
}
