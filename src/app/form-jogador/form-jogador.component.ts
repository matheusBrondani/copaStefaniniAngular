import { Component, OnInit } from '@angular/core';
import { Posicao } from '../core/models/posicao';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})
export class FormJogadorComponent implements OnInit {

  public listPosicoes: Posicao[];

  constructor() {
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
  }

  ngOnInit() {
  }

}
