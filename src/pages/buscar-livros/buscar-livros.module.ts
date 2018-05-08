import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarLivrosPage } from './buscar-livros';

@NgModule({
  declarations: [
    BuscarLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarLivrosPage),
  ],
})
export class BuscarLivrosPageModule {}
