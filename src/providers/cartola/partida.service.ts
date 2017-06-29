import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PartidaCollectionModel } from '../../models/partida.models';

@Injectable()
export class PartidaService {
    private url = 'https://api.cartolafc.globo.com/partidas';

    constructor(private http: Http, private headers: Headers) { };

    getProximasPartidas(): Promise<PartidaCollectionModel> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as PartidaCollectionModel)
    }

    getPartidasRodada(numeroRodada: number): Promise<PartidaCollectionModel> {
        return this.http.get(this.url + '/' + numeroRodada)
            .toPromise()
            .then(response => response.json() as PartidaCollectionModel)
    }


}