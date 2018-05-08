import { LivrosLidoStorageProvider } from './../../providers/livroslidostorage/livroslidostorage';
import { BookDetail } from './../../models/book-detail';
import { BookStorageProvider } from './../../providers/bookstorage/bookstorage';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookProvider: BookStorageProvider, private livrosLidosProvider: LivrosLidoStorageProvider) {
  }

  ionViewDidEnter(){
    this.bookProvider.getAll().then((livros: BookDetail[]) => {
      this.livrosLendo = livros || [];
    });

    this.livrosLidosProvider.getAll().then((livros: BookDetail[]) => {
      this.livrosQueJaLi = livros;
    })
  }

  abrirLivro(id: string, lido: boolean) {
    this.navCtrl.push('BookDetailPage', { bookId: id, lido: lido, favorito: true });
  }
}
