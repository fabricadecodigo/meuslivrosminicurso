import { LivrosLidoStorageProvider } from './../../providers/livroslidostorage/livroslidostorage';
import { BookStorageProvider } from './../../providers/bookstorage/bookstorage';
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
  favorito: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookApi: BookApiProvider, private livroNaoLido: BookStorageProvider, private livroLidoProvider: LivrosLidoStorageProvider) {
    this.book = new BookDetail();
    this.favorito = this.navParams.data.favorito || false;
    this.lido = this.navParams.data.lido || false;

    if (this.navParams.data.bookId) {
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

  adicionarFavorito(book: BookDetail) {
    this.livroNaoLido.add(book).then(() => {
      this.favorito = true;
    });
  }

  removerFavorito(book: BookDetail) {
    if (this.lido) {
      this.livroLidoProvider.remove(book);
    } else {
      this.livroNaoLido.remove(book);
    }

    this.favorito = false;
  }

  marcarComoLido(livro: BookDetail) {
    this.livroNaoLido.remove(livro).then(() => {
      this.livroLidoProvider.add(livro).then(() => {
        this.lido = true;
      });
    });
  }

  marcarComoNaoLido(livro: BookDetail) {
    this.livroLidoProvider.remove(livro).then(() => {
      this.livroNaoLido.add(livro).then(() => {
        this.lido = false;
      });
    });
  }
}
