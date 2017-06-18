import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartolaProvider {

  constructor(public http: Http) {
    console.log('Hello CartolaProvider Provider');
  }

  getRemoteData() {
    this.http.get('https://api.cartolafc.globo.com/atletas/pontuados').subscribe(data => {
      console.log(data);
    });
    
  }

}
