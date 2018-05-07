import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchbooksPage } from './searchbooks';

@NgModule({
  declarations: [
    SearchbooksPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchbooksPage),
  ],
})
export class SearchbooksPageModule {}
