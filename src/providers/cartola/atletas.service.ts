import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AtletasPontuadosModel } from '../../models/atletas.models';

@Injectable()
export class AtletasService {
    private url = 'https://api.cartolafc.globo.com/atletas';

    headers: Headers;

    constructor(private http: Http) { }

    public getPontuados(): Promise<AtletasPontuadosModel> {
        return this.http.get(this.url + '/pontuados')
            .toPromise()
            .then(response => response.json() as AtletasPontuadosModel);
    }
}

