import { LivrosApiProvider } from './../../providers/livros-api/livros-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buscar-livros',
  templateUrl: 'buscar-livros.html',
})
export class BuscarLivrosPage {
  livros: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: LivrosApiProvider) {
  }

  buscarLivros(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.api.filtrar(val).subscribe((livros: any) => {
        this.livros = livros.items;
      });
    } else {
      this.livros = [];
    }
  }

  abrirLivro(id: string) {
    this.navCtrl.push('DetalhesPage', { livroId: id });
  }

}
