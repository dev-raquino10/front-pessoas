import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  { path: 'pessoas', component: ListaPessoasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
