import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ClubeModel, EsquemaModel, PatrocinadorModel } from '../../models/clube.models';

@Injectable()
export class ClubeService {
    private url_clubes = 'https://api.cartolafc.globo.com/clubes';
    private url_esquemas = 'https://api.cartolafc.globo.com/esquemas';
    private url_patrocinadores = 'https://api.cartolafc.globo.com/patrocinadores';

    constructor(private http: Http, private headers: Headers) { }

    getClubes(): Promise<Array<ClubeModel>> {
        return this.http.get(this.url_clubes)
            .toPromise()
            .then(response => response.json() as Array<ClubeModel>)
    }

     getEsquemas(): Promise<Array<EsquemaModel>> {
        return this.http.get(this.url_esquemas)
            .toPromise()
            .then(response => response.json() as Array<EsquemaModel>)
    }

    getPatrocinadores(): Promise<Array<PatrocinadorModel>> {
        return this.http.get(this.url_patrocinadores)
            .toPromise()
            .then(response => response.json() as Array<PatrocinadorModel>)
    }

}