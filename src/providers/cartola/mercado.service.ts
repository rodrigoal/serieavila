import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
}

export class DestaqueModel {
    Atleta: AtletaDestaqueModel;
    escalacoes: number;
    clube: string;
    escudo_clube: string;
    posicao: string;
}

export interface AtletaDestaqueModel {
    atleta_id: number,
    nome: string,
    apelido: string,
    foto: string
    preco_editorial: number
}