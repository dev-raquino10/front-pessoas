import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

const routes: Routes = [
  { path: 'pessoas', component: ListaPessoasComponent },
  { path: 'cadastrar', component: CadastroPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
