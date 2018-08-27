import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from '../../../../node_modules/rxjs';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: Player[];
  private playerUrl = environment.apiUrl+'api/player/';

  constructor(
    private http: HttpClient  
  ) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl);
  }

  addPlayerAPI(newPlayer: Player): Observable<Player>{
    return this.http.post<Player>(this.playerUrl,newPlayer);
  }
}
