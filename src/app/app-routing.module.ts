import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaPessoasComponent } from './tabela-pessoas/tabela-pessoas.component';


const routes: Routes = [
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: TabelaPessoasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
