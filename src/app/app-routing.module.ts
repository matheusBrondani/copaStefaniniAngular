import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormTesteComponent } from './form-teste/form-teste.component';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';
import { FormTimeComponent } from './form-time/form-time.component';
import { ListSomethingComponent } from "./list-something/list-something.component";

const routes: Routes = [
    {
        path: 'form', 
        component: FormTesteComponent,
        children: [{
            path: 'time',
            component: FormTimeComponent
        },
        {
            path: 'jogador',
            component: FormJogadorComponent
        }]
    },
    {path: 'list', component: ListSomethingComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
export const routingComponents = [
    ListSomethingComponent,
    FormTesteComponent,
    FormJogadorComponent,
    FormTimeComponent
]; 