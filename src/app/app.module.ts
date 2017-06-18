import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LigasPage } from '../pages/ligas/ligas';
import { JogosPage } from '../pages/jogos/jogos';
import { JogadoresPage } from '../pages/jogadores/jogadores';
import { ConfigPage } from "../pages/config/config";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CartolaProvider } from '../providers/cartola/cartola';

@NgModule({
  declarations: [
    MyApp,
    LigasPage,
    JogosPage,
    JogadoresPage,
    ConfigPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LigasPage,
    JogosPage,
    JogadoresPage,
    ConfigPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartolaProvider
  ]
})
export class AppModule {}
