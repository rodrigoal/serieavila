import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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

export class AtletasPontuadosModel {
    rodada: number;
    atletas: Array<AtletaPontuadoModel>;
    clubes: Array<ClubePontuadoModel>;
    total_atletas: number;
}

export interface AtletaPontuadoModel {
    apelido: string;
    pontuacao: number;
    scout: Array<any>;
    foto: string;
    posicao_id: number;
    clube_id: number;
}

export interface ClubePontuadoModel {
    id: 262,
    nome: string,
    abreviacao: string,
    posicao: number,
    escudos: {
        "60x60": string;
        "45x45": string;
        "30x30": string;
    }
}