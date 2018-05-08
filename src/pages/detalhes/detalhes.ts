import { LivrosApiProvider } from './../../providers/livros-api/livros-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LivrosNaoLidosProvider } from '../../providers/livros-nao-lidos/livros-nao-lidos';
import { LivrosLidosProvider } from '../../providers/livros-lidos/livros-lidos';
import { Livro } from '../../models/livro';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  livro: Livro;
  lido: boolean;
  favorito: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private livroApi: LivrosApiProvider, private livrosNaoLidosProvider: LivrosNaoLidosProvider, private livrosLidosProvider: LivrosLidosProvider) {

    this.livro = new Livro();
    this.favorito = this.navParams.data.favorito || false;
    this.lido = this.navParams.data.lido || false;

    if (this.navParams.data.livroId) {
      this.recuperarLivro(this.navParams.data.livroId);
    }
  }

  private recuperarLivro(id: string) {
    this.livroApi.recuperar(id).subscribe((livro: any) => {
      const livroInfo = livro.volumeInfo;
      this.livro.id = id;
      this.livro.title = livroInfo.title;
      this.livro.subtitle = livroInfo.subtitle;
      this.livro.authors = livroInfo.authors;
      this.livro.publisher = livroInfo.title;
      this.livro.description = livroInfo.description;
      this.livro.pageCount = livroInfo.pageCount;
      if (livroInfo.publishedDate) {
        this.livro.publishedDate = this.recuperaData(livroInfo.publishedDate);
      }
      if (livroInfo.imageLinks) {
        this.livro.thumbnail = livroInfo.imageLinks.thumbnail;
      }
    });
  }

  private recuperaData(data: string) {
    const dateArr = data.split('-');
    if (dateArr.length > 1) {
      return new Date(`${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`);
    } else {
      return new Date(`${dateArr[0]}/1/1`);
    }
  }

  adicionarFavorito(livro: Livro) {
    this.livrosNaoLidosProvider.adicionar(livro).then(() => {
      this.favorito = true;
    });
  }

  removerFavorito(livro: Livro) {
    if (this.lido) {
      this.livrosLidosProvider.remover(livro);
    } else {
      this.livrosNaoLidosProvider.remover(livro);
    }

    this.favorito = false;
  }

  marcarComoLido(livro: Livro) {
    this.livrosNaoLidosProvider.remover(livro).then(() => {
      this.livrosLidosProvider.adicionar(livro).then(() => {
        this.lido = true;
      });
    });
  }

  marcarComoNaoLido(livro: Livro) {
    this.livrosLidosProvider.remover(livro).then(() => {
      this.livrosNaoLidosProvider.adicionar(livro).then(() => {
        this.lido = false;
      });
    });
  }
}
