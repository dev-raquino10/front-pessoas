import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../pessoa.service';
import { Pessoa } from '../../pessoa'

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];
  grupos: string[] = ['Campesina', 'Filipini', 'Guadalupe', 'Salão do reino', 'Santina da Costa', 'Umuarama', 'Vila Yara', 'Victor Brecheret'];
  filtroGrupo: string = 'Todos';
  pessoasFiltradas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.pessoaService.listarPessoas().subscribe(
      (data: Pessoa[]) => {
        this.pessoas = data.map(pessoa => ({
          id: pessoa.id,
          nome: pessoa.nome,
          nomeCompleto: pessoa.nomeCompleto,
          nomeFamilia: pessoa.nomeFamilia,
          grupo: pessoa.grupo,
          privilegio: pessoa.privilegio,
          tipoPublicador: pessoa.tipoPublicador,
          dtNascimento: pessoa.dtNascimento,
          dtBatismo: pessoa.dtBatismo,
          sexo: pessoa.sexo,
          telefone: pessoa.telefone,
          endereco: pessoa.endereco
        }));
        this.filtrar();
      },
      error => {
        console.log(error);
      }
    );
  }

  filtrar(): void {
    if (this.filtroGrupo === 'Todos') {
      this.pessoasFiltradas = this.pessoas;
    } else {
      this.pessoasFiltradas = this.pessoas.filter(
        (pessoa) => pessoa.grupo === this.filtroGrupo
      );
    }
  }
  

  /*filtrar(): void {
    if (this.filtroGrupo) { // Verifica se o filtro não está vazio
      this.pessoasFiltradas = this.pessoas.filter(
        (pessoa) => pessoa.grupo === this.filtroGrupo
      );
    } else {
      this.pessoasFiltradas = this.pessoas; // Exibe a lista completa
    }
  }*/
  

}
