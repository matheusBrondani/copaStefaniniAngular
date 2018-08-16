import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormTesteComponent } from './form-teste/form-teste.component';
import { ListSomethingComponent } from './list-something/list-something.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { CpfMask2Pipe } from './core/pipes/cpf-mask2.pipe';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { FormTimeComponent } from './form-time/form-time.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTesteComponent,
    ListSomethingComponent,
    CpfMask2Pipe,
    FormJogadorComponent,
    FormTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
