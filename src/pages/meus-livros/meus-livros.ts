import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../models/livro';
import { LivrosNaoLidosProvider } from '../../providers/livros-nao-lidos/livros-nao-lidos';
import { LivrosLidosProvider } from '../../providers/livros-lidos/livros-lidos';

@IonicPage()
@Component({
  selector: 'page-meus-livros',
  templateUrl: 'meus-livros.html',
})
export class MeusLivrosPage {
  livrosLendo: Livro[] = [];
  livrosQueJaLi: Livro[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private livrosNaoLidosProvider: LivrosNaoLidosProvider, private livrosLidosProvider: LivrosLidosProvider) {
  }

  ionViewDidEnter(){
    this.livrosNaoLidosProvider.recuperarTodos().then((livros: Livro[]) => {
      this.livrosLendo = livros || [];
    });

    this.livrosLidosProvider.recuperarTodos().then((livros: Livro[]) => {
      this.livrosQueJaLi = livros;
    })
  }

  abrirLivro(id: string, lido: boolean) {
    this.navCtrl.push('DetalhesPage', { livroId: id, lido: lido, favorito: true });
  }

}
