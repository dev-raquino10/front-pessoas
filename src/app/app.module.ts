import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { PessoaService } from './pessoa.service';
import { CadastroPessoaComponent } from './pessoas/cadastro-pessoa/cadastro-pessoa.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ModalPessoasComponent } from './pessoas/modal-pessoas/modal-pessoas.component';
import { EditarPessoasComponent } from './pessoas/editar-pessoas/editar-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaPessoasComponent,
    CadastroPessoaComponent,
    SidebarComponent,
    AppHomeComponent,
    ModalPessoasComponent,
    EditarPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
