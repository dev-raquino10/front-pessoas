import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa'

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];

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
      },
      error => {
        console.log(error);
      }
    );
  }

}
