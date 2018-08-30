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
  private teamUrl = environment.apiUrl + 'api/team/';

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl);
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(this.teamUrl + id);
  }

  addTeamAPI(newTeam: Team): Observable<Team> {
    return this.http.post<Team>(this.teamUrl, newTeam);
  }

  updateTeam(toUpTeam: Team): Observable<Team> {
    const url = `${this.teamUrl}${toUpTeam.idTeam}`    
    return this.http.put<Team>(url.toString(), toUpTeam);
  }

  delTeam(id: number): Observable<{}> {
    const url = `${this.teamUrl}${id}`
    return this.http.delete(url.toString());
  }
}