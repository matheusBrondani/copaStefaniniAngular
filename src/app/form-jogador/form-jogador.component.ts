import { Component, OnInit } from '@angular/core';
import { Posicao } from '../core/models/posicao';
import { Team } from "../core/models/team";
import { Player } from "../core/models/player";

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})
export class FormJogadorComponent implements OnInit {

  public listPosicoes: Posicao[];
  public listTimes: Team[];
  public jogador: Player;

  constructor() {
    this.jogador = new Player();
    this.jogador.position = 0;
    this.jogador.idTeam = 1;
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

    this.listTimes = [
      new Team(1,'Jurubeba F.C.','Maracabeba'),
      new Team(2,'Wizard Gizzard F.C.','Wizard\'s Stadium'),
      new Team(3,'Sem Grana F.C.','Minha Carteira'),
    ];
  }

  ngOnInit() {
  }

}
