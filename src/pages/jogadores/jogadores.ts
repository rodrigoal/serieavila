import { CartolaProvider } from './../../providers/cartola/cartola';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  constructor(public navCtrl: NavController, public cartolaService: CartolaProvider) {

  }

  ionViewDidLoad() {
    this.cartolaService.getRemoteData();
  }

}
