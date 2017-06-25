import { AtletasService } from './../../providers/cartola/atletas.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  constructor(public navCtrl: NavController, public atletaService: AtletasService) {

  }

  ionViewDidLoad() {
    this.atletaService.getPontuados().then((response) => {
      console.log(response);
    });
  }

}
