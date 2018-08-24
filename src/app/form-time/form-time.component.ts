import { Component, OnInit } from '@angular/core';
import { Team } from '../core/models/team';
import { TeamService } from '../core/services/team.service';

@Component({
  selector: 'app-form-time',
  templateUrl: './form-time.component.html',
  styleUrls: ['./form-time.component.css']
})
export class FormTimeComponent implements OnInit {

  private newTeam: Team;

  constructor(
    private teamService: TeamService
  ) {
    this.newTeam = new Team();
   }

  ngOnInit() {
  }
  
  addPlayer(): void{
    this.teamService.addTeamAPI(this.newTeam);
  }
}
