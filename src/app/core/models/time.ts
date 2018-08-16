import { Jogador } from "./jogador";

export class Time {
    constructor(
        public idTime: number,
        public nome: string,
        public nomeEstadio: string,
        public jogadores: Jogador[]
    ){}
}
