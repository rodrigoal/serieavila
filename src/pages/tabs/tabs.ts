import { Component } from '@angular/core';

import { LigasPage } from '../ligas/ligas';
import { JogosPage } from '../jogos/jogos';
import { JogadoresPage } from '../jogadores/jogadores';
import { ConfigPage } from "../config/config";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LigasPage;
  tab2Root = JogosPage;
  tab3Root = JogadoresPage;
  tab4Root = ConfigPage;

  constructor() {

  }
}
