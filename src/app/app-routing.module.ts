import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { CadastroPessoaComponent } from './pessoas/cadastro-pessoa/cadastro-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  { path: 'cadastrar', component: CadastroPessoaComponent },
  { path: 'pessoas', component: ListaPessoasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
