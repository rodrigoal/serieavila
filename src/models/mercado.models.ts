export class DestaqueModel {
    constructor(
        public Atleta: AtletaDestaqueModel = new AtletaDestaqueModel,
        public escalacoes: number = 0,
        public clube: string = null,
        public escudo_clube: string = null,
        public posicao: string = null
    ) { }
}

export class AtletaDestaqueModel {
    constructor(
        public atleta_id: number = 0,
        public nome: string = null,
        public apelido: string = null,
        public foto: string = null,
        public preco_editorial: number = 0) { }
}

export class StatusMercado {
    constructor(
        public rodada_atual: number = 0,
        public status_mercado: number = 0,
        public esquema_default_id: number = 0,
        public cartoleta_inicial: number = 0,
        public max_ligas_free: number = 0,
        public max_ligas_pro: number = 0,
        public max_ligas_matamata_free: number = 0,
        public max_ligas_matamata_pro: number = 0,
        public max_ligas_patrocinadas_free: number = 0,
        public max_ligas_patrocinadas_pro_num: number = 0,
        public game_over: boolean = false,
        public temporada: number = 0,
        public reativar: boolean = false,
        public times_escalados: number = 0,
        public mercado_pos_rodada: boolean = false,
        public fechamento: FechamentoMercadoModel,
        public aviso: string = null) { }
}

export class FechamentoMercadoModel {

    constructor(
        public dia: number = 0,
        public mes: number = 0,
        public ano: number = 0,
        public hora: number = 0,
        public minuto: number = 0,
        public timestamp: number = 0) { }
}