import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {
[x: string]: any;
  formularioPessoa!: FormGroup;

  novaPessoa: Pessoa = new Pessoa();

  constructor(private formBuilder: FormBuilder, private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.formularioPessoa = this.formBuilder.group({
      nome: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      nomeFamilia: ['', Validators.required],
      grupo: [''],
      privilegio: [''],
      tipoPublicador: [''],
      dtNascimento: [''],
      dtBatismo: [''],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['']
    });
  }
  

  cadastrarPessoa(): void {
    const novaPessoa = this.formularioPessoa.getRawValue() as Pessoa;
    this.pessoaService.cadastrarPessoa(novaPessoa)
      .subscribe(() => {
        this.formularioPessoa.reset();
      });
  }

  onSubmit(): void {
    this.cadastrarPessoa();
  }

}
