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
  public editTeam: boolean;
  public changedTeam: Team;

  constructor(
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.getTeams();
    this.changedTeam = new Team();
    this.editTeam = false;
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => this.listTeams = teams);
  }

  onClickEdit(id: number) {
    this.teamService.getTeamById(id).subscribe(team => this.changedTeam = team);
    this.editTeam = true;
  }

  goBack() {    
    this.editTeam = false;
  }

  onSubmit() {
    this.teamService.updateTeam(this.changedTeam);
    
  }

  onClickDel(index: number, name: string) {
    if (confirm("Você realmente deseja remover o time " + name + " ?")) {
      this.teamService.delTeam(index).subscribe(
        res => {
          this.getTeams()
        }
      );
    }
  }
}
