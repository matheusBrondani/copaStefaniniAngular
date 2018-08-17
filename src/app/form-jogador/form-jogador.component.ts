import { Component, OnInit } from '@angular/core';
import { Posicao } from '../core/models/posicao';
import { Time } from "../core/models/time";
import { Jogador } from "../core/models/jogador";

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})
export class FormJogadorComponent implements OnInit {

  public listPosicoes: Posicao[];
  public listTimes: Time[];
  public jogador: Jogador;

  constructor() {
    this.jogador = new Jogador();
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
      new Time(1,'Jurubeba F.C.','Maracabeba'),
      new Time(2,'Wizard Gizzard F.C.','Wizard\'s Stadium'),
      new Time(3,'Sem Grana F.C.','Minha Carteira'),
    ];
  }

  ngOnInit() {
  }

}
