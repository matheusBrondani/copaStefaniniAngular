import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
    private url = ''
  ) { }
}
