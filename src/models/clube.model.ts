export class ClubeModel {
    id: number;
    nome: string;
    abreviacao: string;
    posicao: number;
    escudos: {
        "60x60": string;
        "45x45": string;
        "30x30": string;
    }

    constructor() {
        this.id = 0;
        this.nome = null;
        this.abreviacao = null;
        this.posicao = 0;
        this.escudos = {
            "60x60": null,
            "45x45": null,
            "30x30": null
        }
    }
}