import { ClubeModel } from './clube.model'

export class AtletasPontuadosModel {
    rodada: number;
    atletas: Array<AtletaPontuadoModel>;
    clubes: Array<ClubeModel>;
    total_atletas: number;
}

export class AtletaPontuadoModel {
    apelido: string;
    pontuacao: number;
    scout: Array<any>;
    foto: string;
    posicao_id: number;
    clube_id: number;
}

