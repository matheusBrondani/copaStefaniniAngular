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

  getPlayers(): void{
    this.playerService.getPlayers().subscribe(players => this.listPlayers = players);
  }
}
