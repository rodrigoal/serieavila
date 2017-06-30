import { ClubeModel } from './clube.models';

export class PartidaCollectionModel {
    partidas: Array<PartidaModel>;
    clubes: Array<ClubeModel>;
    rodada: number;
}

export class PartidaModel {
    clube_casa_id: number;
    clube_casa_posicao: number;
    clube_visitante_id: number;
    aproveitamento_mandante: Array<string>;
    aproveitamento_visitante: Array<string>;
    clube_visitante_posicao: number;
    partida_data: Date;
    local: string;
    valida: boolean;
    placar_oficial_mandante: number;
    placar_oficial_visitante: number;
    url_confronto: string;
    url_transmissao: string;

    constructor() {
        this.clube_casa_id = 0;
        this.clube_casa_posicao = 0;
        this.clube_visitante_id = 0;
        this.aproveitamento_mandante = new Array<string>();
        this.aproveitamento_visitante = new Array<string>();
        this.clube_visitante_posicao = 0;
        this.partida_data = new Date;
        this.local = null;
        this.valida = true;
        this.placar_oficial_mandante = 0;
        this.placar_oficial_visitante = 0;
        this.url_confronto = null;
        this.url_transmissao = null;
    }
}