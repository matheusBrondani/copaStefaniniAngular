import { Component, OnInit } from '@angular/core';
import { Player } from "../core/models/player";
import { PlayerService } from "../core/services/player.service";

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  public listPlayers: Player[];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      players => {
        this.listPlayers = players
      },
      error => {
        alert("Ocorreu algum problema inesperado.");
      });
  }

  onClickDel(index: number, name: string) {
    if (confirm("Você realmente deseja remover o jogador " + name + " ?")) {
      this.playerService.delPlayer(index, name).subscribe(
        (res) => {
          this.getPlayers()
        },
        error => {
          alert("Ocorreu algum problema inesperado.");
        } 
      );
    }
  }
}
