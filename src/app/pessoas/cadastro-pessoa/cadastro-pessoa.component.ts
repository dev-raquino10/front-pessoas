import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent {
  nome: string;
  nomeCompleto: string;
  nomeFamilia: string;
  grupo: string;
  tipoPublicador: string;
  privilegio: string;
  dataNascimento: Date;
  dataBatismo: Date;
  sexo: string;
  telefone: string;
  endereco: string;
  tituloPagina: string;
  botaoAcao: string;
  pessoa: any;
  pessoaForm: FormGroup;

  constructor(private http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder, private pessoaService: PessoaService) {
    this.pessoaForm = this.fb.group({
      nome: [''],
      nomeCompleto: [''],
      nomeFamilia: [''],
      grupo: [''],
      privilegio: [''],
      tipoPublicador: [''],
      dtNascimento: [''],
      dtBatismo: [''],
      sexo: [''],
      telefone: [''],
      endereco: ['']
    });
  }

  submitForm() {
    const novaPessoa = {
      nome: this.pessoaForm.value.nome,
      nomeCompleto: this.pessoaForm.value.nomeCompleto,
      nomeFamilia: this.pessoaForm.value.nomeFamilia,
      grupo: this.pessoaForm.value.grupo,
      privilegio: this.pessoaForm.value.privilegio,
      tipoPublicador: this.pessoaForm.value.tipoPublicador,
      dtNascimento: this.pessoaForm.value.dtNascimento,
      dtBatismo: this.pessoaForm.value.dtBatismo,
      sexo: this.pessoaForm.value.sexo,
      telefone: this.pessoaForm.value.telefone,
      endereco: this.pessoaForm.value.endereco
    };

    this.pessoaService.cadastrarPessoa(novaPessoa).subscribe(
      pessoa => console.log('Pessoa cadastrada com sucesso!'),
      error => console.log('Erro ao cadastrar pessoa: ', error)
    );
  }

  ngOnInit() {
    const id = +this.route.snapshot.queryParamMap.get('id');
    const editar = this.route.snapshot.queryParamMap.get('editar');
    if (id) {
      if (editar) {
        this.tituloPagina = 'Editar Pessoa';
        this.botaoAcao = 'Salvar Alterações';
        this.pessoaService.getPessoa(id).subscribe(
          pessoa => this.pessoa = pessoa,
          error => console.log(error)
        );
      } else {
        this.pessoaService.getPessoa(id).subscribe(
          pessoa => this.pessoaForm.patchValue(pessoa),
          error => console.log(error)
        );
      }
    }
  }

}
