import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoaForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      nomeFamilia: ['', Validators.required],
      grupo: ['', Validators.required],
      privilegio: ['', Validators.required],
      tipoPublicador: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      dtBatismo: ['', Validators.required],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  get f() { return this.pessoaForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.pessoaForm.invalid) {
      return;
    }

    const pessoa: Pessoa = this.pessoaForm.value;

    this.pessoaService.salvarPessoa(pessoa).subscribe(
      data => {
        console.log(data);
        alert('Pessoa cadastrada com sucesso!');
        this.router.navigate(['pessoas']);
        this.ngOnInit();
      },
      error => {
        console.log(error);
        alert('Erro ao cadastrar pessoa!');
      }
    );
  }

}
