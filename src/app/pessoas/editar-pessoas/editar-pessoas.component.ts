import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  activatedRoute: any;
  titulo: any;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.titulo = data.titulo;
    });
  
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.pessoaService.getPessoa(id).subscribe(
        pessoa => this.pessoa = pessoa,
        error => console.log(error)
      );
    });
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
