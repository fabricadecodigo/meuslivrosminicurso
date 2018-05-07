import { BookDetail } from './../../models/book-detail';
import { BookstorageProvider } from './../../providers/bookstorage/bookstorage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mybooks',
  templateUrl: 'mybooks.html',
})
export class MybooksPage {
  livrosLendo: BookDetail[] = [];
  livrosQueJaLi: BookDetail[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookProvider: BookstorageProvider) {
  }

  ionViewDidEnter(){
    this.bookProvider.getAll().then((books: BookDetail[]) => {
      this.livrosLendo = books;
    })
  }

  abrirLivro(id: string) {
    this.navCtrl.push('BookDetailPage', { bookId: id });
  }
}
