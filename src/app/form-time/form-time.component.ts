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
  private postedTeam: Team;

  constructor(
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.newTeam = new Team();
    this.postedTeam = new Team();
  }
  
  onSubmit(){
    this.teamService.addTeamAPI(this.newTeam).subscribe(
      team => {
        this.postedTeam = team
      },
      error => {
        alert("Ocorreu algum erro inesperado.");
      }
    );
  }
}
