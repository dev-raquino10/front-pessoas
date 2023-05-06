import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model'

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];
  grupos: string[] = ['Campesina', 'Filipini', 'Guadalupe', 'Salão do Reino', 'Santina da Costa', 'Umuarama', 'Vila Yara', 'Victor Brecheret'];
  filtroGrupo: string = 'Todos';
  pessoasFiltradas: Pessoa[] = [];
  pessoaSelecionada: Pessoa;


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

  abrirModal(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
    document.body.classList.add('modal-open');
  }

  fecharModal() {
    this.pessoaSelecionada = null;
    document.body.classList.remove('modal-open');
  }

  editarPessoa() {
    this.fecharModal();
    this.router.navigate(['/cadastrar'], { state: { pessoa: this.pessoaSelecionada } });
  }

}
