import { Player } from "./player";

export class Team {
    constructor(
        public idTeam?: number,
        public name?: string,
        public nameStadium?: string,
        public players?: Player[]
    ){}

    public toJSON() {
        return {
            idTeam: this.idTeam,
            name: this.name,
            nameStadium: this.nameStadium
        };
    }
}
