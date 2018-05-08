import { LivrosLidoStorageProvider } from './../providers/livroslidostorage/livroslidostorage';
import { LivrosStorageProvider } from './../providers/livrosstorage/livrosstorage';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { BookStorageProvider } from '../providers/bookstorage/bookstorage';
import { BookApiProvider } from '../providers/bookapi/bookapi';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookStorageProvider,
    LivrosStorageProvider,
    BookApiProvider,
    LivrosLidoStorageProvider
  ]
})
export class AppModule {}
