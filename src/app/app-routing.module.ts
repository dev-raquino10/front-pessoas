import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { CadastroPessoaComponent } from './pessoas/cadastro-pessoa/cadastro-pessoa.component';
import { PessoaResolver } from './resolvers/pessoa.resolver';
import { EditarPessoasComponent } from './pessoas/editar-pessoas/editar-pessoas.component'; // importe o componente de edição

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppHomeComponent },
  {
    path: 'cadastrar', component: CadastroPessoaComponent,
    data: { titulo: 'Cadastro de Pessoa' }
  },
  {
    path: 'pessoas', component: ListaPessoasComponent,
    resolve: { pessoas: PessoaResolver }
  },
  {
    path: 'editar/:id', component: EditarPessoasComponent,
    data: { titulo: 'Editar Pessoa' },
    resolve: { pessoa: PessoaResolver }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
