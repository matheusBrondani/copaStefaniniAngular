import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teams: Team[];
  private teamUrl = environment.apiUrl+'api/team/';

  constructor(
    private http: HttpClient
  ) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl);
  }

  addTeamAPI(newTeam: Team):void{
    this.http.post<Team>(this.teamUrl,newTeam.toJSON());
  }
}