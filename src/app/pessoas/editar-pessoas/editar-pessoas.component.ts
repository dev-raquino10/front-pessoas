import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Pessoa } from '../../models/pessoa.model';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-editar-pessoas',
  templateUrl: './editar-pessoas.component.html',
  styleUrls: ['./editar-pessoas.component.css']
})
export class EditarPessoasComponent implements OnInit {
  pessoaForm: FormGroup;
  pessoa: Pessoa = {};
  id: number;
  titulo: string;
  editarPessoaSelecionada: Pessoa;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.titulo = data['titulo'];
    });
  
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.pessoaService.getPessoa(id).subscribe(
        pessoa => {
          this.pessoa = pessoa;
          this.preencherFormulario();
        },
        error => console.log(error)
      );
    });
  
    this.pessoaForm = this.fb.group({
      // defina aqui os campos do formulário, com os respectivos valores iniciais e validadores
    });
  }

  preencherFormulario() {
    this.pessoaForm.patchValue({
      nome: this.pessoa.nome,
      nomeCompleto: this.pessoa.nomeCompleto,
      nomeFamilia: this.pessoa.nomeFamilia,
      grupo: this.pessoa.grupo,
      tipoPublicador: this.pessoa.tipoPublicador,
      privilegio: this.pessoa.privilegio,
      dtNascimento: this.pessoa.dtNascimento,
      dtBatismo: this.pessoa.dtBatismo,
      sexo: this.pessoa.sexo,
      telefone: this.pessoa.telefone,
      endereco: this.pessoa.endereco,
    });
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

  salvar() {
    if (this.pessoaForm.valid) {
      const pessoaAtualizada: Pessoa = {
        id: this.pessoa.id,
        nome: this.pessoaForm.get('nome').value,
        nomeCompleto: this.pessoaForm.get('nomeCompleto').value,
        nomeFamilia: this.pessoaForm.get('nomeFamilia').value,
        grupo: this.pessoaForm.get('grupo').value,
        tipoPublicador: this.pessoaForm.get('tipoPublicador').value,
        privilegio: this.pessoaForm.get('privilegio').value,
        dtNascimento: this.pessoaForm.get('dtNascimento').value,
        dtBatismo: this.pessoaForm.get('dtBatismo').value,
        sexo: this.pessoaForm.get('nome').value,
        telefone: this.pessoaForm.get('telefone').value,
        endereco: this.pessoaForm.get('endereco').value,
      };
      this.pessoaService.atualizarPessoa(pessoaAtualizada).subscribe(
        () => {
          this.router.navigate(['/pessoas']);
        },
        error => {

          console.log(error);
        }
      );
    }
  }
}
