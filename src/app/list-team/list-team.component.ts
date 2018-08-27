import { Component, OnInit } from '@angular/core';
import { TeamService } from "../core/services/team.service";
import { Team } from '../core/models/team';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  public listTeams: Team[];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void{
    this.teamService.getTeams().subscribe(teams => this.listTeams = teams);
  }
}
