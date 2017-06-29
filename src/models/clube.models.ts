export class ClubeModel {
    escudos: {
        "60x60": string;
        "45x45": string;
        "30x30": string;
    }

    constructor(
        public id: number = 0,
        public nome: string = null,
        public abreviacao: string = null,
        public posicao: number = 0
    ) {
        this.escudos = {
            "60x60": null,
            "45x45": null,
            "30x30": null
        }
    }
}

export class EsquemaModel {
    constructor(
        public esquema_id: number = 0,
        public nome: string = null,
        public posicoes: PosicaoEsquemaModel = new PosicaoEsquemaModel
    ) { }
}

export class PosicaoEsquemaModel {

    constructor(public ata: number = 0,
        public gol: number = 0,
        public lat: number = 0,
        public mei: number = 0,
        public tec: number = 0,
        public zag: number = 0) { }

}

export class PatrocinadorModel {
    constructor(
        public liga_editorial_id: number = 0,
        public liga_id: number = 0,
        public servico_cadun: number = 0,
        public cor_nome_liga: string = null,
        public tipo_ranking: string = null,
        public url_link: string = null,
        public url_editoria_ge: string = null,
        public posicao_inicial: number = null,
        public autorizacao_promocao = null,
        public img_background: string = null,
        public img_marca_patrocinador: string = null,
        public img_marca_patrocinador_png: string = null,
        public nome: string = null,
        public optin: boolean = false,
        public url_termo_uso: string = null
    ) { }
}