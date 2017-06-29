import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DestaqueModel, StatusMercado } from '../../models/mercado.models';

@Injectable()
export class MercadoService {
    private headers: Headers;
    private url = 'https://api.cartolafc.globo.com/mercado';

    constructor(private http: Http) { }

    public getDestaques(): Promise<Array<DestaqueModel>> {
        return this.http.get(this.url + '/destaques')
            .toPromise()
            .then(response => response.json() as Array<DestaqueModel>);
    }

    public getStatus(): Promise<StatusMercado> {
        return this.http.get(this.url + '/status')
            .toPromise()
            .then(response => response.json() as StatusMercado);
    }
}