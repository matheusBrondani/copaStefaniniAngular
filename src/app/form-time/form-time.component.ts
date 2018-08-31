import { Component, OnInit } from '@angular/core';
import { Team } from '../core/models/team';
import { TeamService } from '../core/services/team.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-time',
  templateUrl: './form-time.component.html',
  styleUrls: ['./form-time.component.css']
})
export class FormTimeComponent implements OnInit {

  private newTeam: Team;
  private teamForm: FormGroup;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.newTeam = new Team();

    this.teamForm = new FormGroup({
      'name': new FormControl(this.newTeam.name, [
        Validators.required,
        Validators.minLength(3)
        // forbiddenNameValidator(/bob/i)
      ]),
      'nameStadium': new FormControl(this.newTeam.nameStadium, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get name() { return this.teamForm.get('name'); }
  get nameStadium() { return this.teamForm.get('nameStadium'); }

  onSubmit() {
    this.teamService.addTeamAPI(this.teamForm.value).subscribe(
      success => {
        alert("Time cadastrado com sucesso!");
        this.teamForm.reset();
      },
      error => {
        alert("Ocorreu algum erro inesperado.");
      }
    );
  }
}
