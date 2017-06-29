export class DestaqueModel {
    Atleta: AtletaDestaqueModel;
    escalacoes: number;
    clube: string;
    escudo_clube: string;
    posicao: string;

    constructor() {
        this.Atleta = new AtletaDestaqueModel();
        this.escalacoes = 0;
        this.clube = null;
        this.escudo_clube = null;
        this.posicao = null;
    }
}

export class AtletaDestaqueModel {
    atleta_id: number;
    nome: string;
    apelido: string;
    foto: string;
    preco_editorial: number;

    constructor() {
        this.atleta_id = 0;
        this.nome = null;
        this.apelido = null;
        this.foto = null;
        this.preco_editorial = 0;
    }
}

export class StatusMercado {
    rodada_atual: number;
    status_mercado: number;
    esquema_default_id: number;
    cartoleta_inicial: number;
    max_ligas_free: number;
    max_ligas_pro: number;
    max_ligas_matamata_free: number;
    max_ligas_matamata_pro: number;
    max_ligas_patrocinadas_free: number;
    max_ligas_patrocinadas_pro_num: number;
    game_over: boolean;
    temporada: number;
    reativar: boolean;
    times_escalados: number;
    mercado_pos_rodada: boolean;
    fechamento: FechamentoMercadoModel;
    aviso: string;

    constructor() {
        this.rodada_atual = 0;
        this.status_mercado = 0;
        this.esquema_default_id = 0;
        this.cartoleta_inicial = 0;
        this.max_ligas_free = 0;
        this.max_ligas_pro = 0;
        this.max_ligas_matamata_free = 0;
        this.max_ligas_matamata_pro = 0;
        this.max_ligas_patrocinadas_free = 0;
        this.max_ligas_patrocinadas_pro_num = 0;
        this.game_over = false;
        this.temporada = 0;
        this.reativar = false;
        this.times_escalados = 0;
        this.mercado_pos_rodada = false;
        this.fechamento = new FechamentoMercadoModel;
        this.aviso = '';
    }
}

export class FechamentoMercadoModel {
    dia: number;
    mes: number;
    ano: number;
    hora: number;
    minuto: number;
    timestamp: number;
}