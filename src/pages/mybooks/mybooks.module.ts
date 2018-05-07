import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybooksPage } from './mybooks';

@NgModule({
  declarations: [
    MybooksPage,
  ],
  imports: [
    IonicPageModule.forChild(MybooksPage),
  ],
})
export class MybooksPageModule {}
