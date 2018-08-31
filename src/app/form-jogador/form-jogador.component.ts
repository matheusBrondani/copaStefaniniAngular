import { Component, OnInit } from '@angular/core';
import { Posicao } from '../core/models/posicao';
import { Team } from "../core/models/team";
import { Player } from "../core/models/player";
import { PlayerService } from "../core/services/player.service";
import { TeamService } from '../core/services/team.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})

export class FormJogadorComponent implements OnInit {

  private listPosicoes: Posicao[];
  private listTeams: Team[];
  private newPlayer: Player;
  playerForm: FormGroup;

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService
  ) {

    this.newPlayer = new Player();
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
    this.setForm();
  }

  setForm(){
    this.playerForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'idTeam': new FormControl(1, [
        Validators.required
      ]),
      'position': new FormControl(0, [
        Validators.required
      ]),
      'shirt': new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      'cap': new FormControl(),
      'holder': new FormControl()
    });
  }

  get namePlayer() { return this.playerForm.get('namePlayer'); }
  get idTeam() { return this.playerForm.get('idTeam'); }
  get position() { return this.playerForm.get('position'); }
  get shirt() { return this.playerForm.get('shirt'); }
  get cap() { return this.playerForm.get('cap'); }
  get holder() { return this.playerForm.get('holder'); }

  onSubmit(){
    this.playerService.addPlayerAPI(this.playerForm.value).subscribe(
      success => {
        alert("Jogador cadastrado com sucesso!");
        this.setForm();
      },
      error => {
        alert("Ocorreu algum erro inesperado.")
      }
    );
  }
}
