import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormTimeComponent } from './form-time/form-time.component';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { ListSomethingComponent } from "./list-something/list-something.component";

const routes: Routes = [
    {path: 'form', component: FormTimeComponent},
    {path: 'list', component: ListSomethingComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }