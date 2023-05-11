import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  editarPessoaSelecionada: Pessoa;
  pessoaForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private pessoaService: PessoaService, private router: Router) { }

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

  editarPessoa(pessoaSelecionada: Pessoa) {
    this.editarPessoaSelecionada = this.pessoaSelecionada;
    document.body.classList.add('modal-open');
  }

  onSubmit() {
    this.submitted = true;

    if (this.pessoaForm.invalid) {
      return;
    }

    const pessoa: Pessoa = this.pessoaForm.value;

    this.pessoaService.salvarPessoa(pessoa).subscribe(
      data => {
        console.log(data);
        alert('Pessoa atualizada com sucesso!');
        this.router.navigate(['/listar-pessoas']);
        this.ngOnInit();
      },
      error => {
        console.log(error);
        alert('Erro ao editardados da pessoa!');
      }
    );
  }

  delete(pessoa: Pessoa): void {
    if (confirm('Deseja realmente excluir esta pessoa?')) {
      this.pessoaService.deletarPessoa(pessoa.id)
        .pipe(
          switchMap(() => this.pessoaService.listarPessoas())
        )
        .subscribe(pessoas => {
          this.fecharModal();
          this.ngOnInit();
        });
    }
  }

}
