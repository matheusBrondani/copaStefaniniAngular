import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CpfMask2Pipe } from './core/pipes/cpf-mask2.pipe';
import { ListPlayerComponent } from './list-player/list-player.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { FormTimeComponent } from 'src/app/form-time/form-time.component';
import { FormJogadorComponent } from 'src/app/form-jogador/form-jogador.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfMask2Pipe,
    routingComponents,
    ListPlayerComponent,
    ListTeamComponent,
    FormTimeComponent,
    FormJogadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
