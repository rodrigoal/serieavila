import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SerieAvilaApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LigasPage } from '../pages/ligas/ligas';
import { JogosPage } from '../pages/jogos/jogos';
import { JogadoresPage } from '../pages/jogadores/jogadores';
import { ConfigPage } from "../pages/config/config";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AtletasService } from '../providers/cartola/atletas.service';
import { MercadoService } from '../providers/cartola/mercado.service';

@NgModule({
  declarations: [
    SerieAvilaApp,
    LigasPage,
    JogosPage,
    JogadoresPage,
    ConfigPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SerieAvilaApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SerieAvilaApp,
    LigasPage,
    JogosPage,
    JogadoresPage,
    ConfigPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AtletasService,
    MercadoService
  ]
})
export class AppModule { }
