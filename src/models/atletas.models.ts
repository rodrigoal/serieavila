import { ClubeModel } from './clube.models'

export class AtletasPontuadosModel {
    constructor(
        public rodada: number = 0,
        public atletas: Array<AtletaPontuadoModel> = [],
        public clubes: Array<ClubeModel> = [],
        public total_atletas: number = 0) { }
}

export class AtletaPontuadoModel {
    constructor(
        public apelido: string = null,
        public pontuacao: number = 0,
        public scout: Array<any> = [],
        public foto: string = null,
        public posicao_id: number = 0,
        public clube_id: number = 0) { }
}

