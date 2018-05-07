import { BookApiProvider } from './../../providers/bookapi/bookapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-searchbooks',
  templateUrl: 'searchbooks.html',
})
export class SearchbooksPage {
  searchQuery: string = '';
  books: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookApi: BookApiProvider) {
  }

  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.bookApi.get(val).subscribe((books: any) => {
        this.books = books.items;
      });
    } else {
      this.books = [];
    }
  }


}
