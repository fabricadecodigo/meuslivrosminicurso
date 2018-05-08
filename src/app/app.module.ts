import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { LivrosApiProvider } from '../providers/livros-api/livros-api';
import { LivrosStorageProvider } from '../providers/livros-storage/livros-storage';
import { LivrosNaoLidosProvider } from '../providers/livros-nao-lidos/livros-nao-lidos';
import { LivrosLidosProvider } from '../providers/livros-lidos/livros-lidos';

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
    LivrosNaoLidosProvider,
    LivrosApiProvider,
    LivrosStorageProvider,
    LivrosNaoLidosProvider,
    LivrosLidosProvider
  ]
})
export class AppModule {}
