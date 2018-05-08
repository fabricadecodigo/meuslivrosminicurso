import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusLivrosPage } from './meus-livros';

@NgModule({
  declarations: [
    MeusLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusLivrosPage),
  ],
})
export class MeusLivrosPageModule {}
