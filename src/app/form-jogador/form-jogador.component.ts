import { Component, OnInit } from '@angular/core';
import { Posicao } from '../core/models/posicao';
import { Team } from "../core/models/team";
import { Player } from "../core/models/player";
import { PlayerService } from "../core/services/player.service";
import { TeamService } from '../core/services/team.service';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})

export class FormJogadorComponent implements OnInit {

  public listPosicoes: Posicao[];
  public listTeams: Team[];
  public newPlayer: Player;
  public postedPlayer: Player;

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService
  ) {
    this.newPlayer = new Player();
    this.postedPlayer = new Player();
    this.newPlayer.position = 0;
    this.newPlayer.idTeam = 1;
    this.listPosicoes = [
      new Posicao(0,'Goleiro'),
      new Posicao(1,'Zagueiro 1'),
      new Posicao(2,'Zagueiro 2'),
      new Posicao(3,'Zagueiro 3'),
      new Posicao(4,'Zagueiro 4'),
      new Posicao(5,'Meio-campo 1'),
      new Posicao(6,'Meio-campo 2'),
      new Posicao(7,'Meio-campo 3'),
      new Posicao(8,'Meio-campo 4'),
      new Posicao(9,'Atacante 1'),
      new Posicao(10,'Atacante 2'),
    ];

    this.teamService.getTeams().subscribe(teams => this.listTeams = teams);
  }

  ngOnInit() {
  }

  onSubmit(){
    this.playerService.addPlayerAPI(this.newPlayer).subscribe(player => this.postedPlayer = player);
  }
}
