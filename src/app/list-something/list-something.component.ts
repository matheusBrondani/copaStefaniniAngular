import { Component, OnInit } from '@angular/core';
import { Team } from '../core/models/team';
import { Player } from '../core/models/player';
import { TeamService } from "../core/services/team.service";
import { Observable, of } from 'rxjs';
import { CpfMask2Pipe } from "../core/pipes/cpf-mask2.pipe";

@Component({
  selector: 'app-list-something',
  templateUrl: './list-something.component.html', 
  styleUrls: ['./list-something.component.css'],
  providers: [CpfMask2Pipe]
})

export class ListSomethingComponent implements OnInit {

  public teams: Team[];
 
  constructor(
    private teamService: TeamService
  ){}

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void{
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

  addCoisaLista () {
    // if(this.valorTxtCoisa != ''){
    //     this.coisas.push(this.valorTxtCoisa);
    //     this.valorTxtCoisa = '';
    // }
  }

  remove (index:number) {
    // this.coisas.splice(index, 1);
  }

  selecionaCliente (index:number) {
    // this.chosenOne = this.listClientes[index];
  }
}
