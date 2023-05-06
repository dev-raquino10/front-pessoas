import { Component } from '@angular/core';


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
  route: any;
  tituloPagina: string;
  botaoAcao: string;
  pessoasService: any;
  pessoa: any;
  pessoaForm: any;

  constructor() { }

  submitForm() {
    // aqui você pode adicionar o código para enviar os dados do formulário para um serviço de backend ou armazená-los localmente
    console.log('Formulário enviado com sucesso!');
  }

  ngOnInit() {
    const id = +this.route.snapshot.queryParamMap.get('id');
    const editar = this.route.snapshot.queryParamMap.get('editar');
    if (id) {
      if (editar) {
        this.tituloPagina = 'Editar Pessoa';
        this.botaoAcao = 'Salvar Alterações';
        this.pessoasService.getPessoa(id).subscribe(
          pessoa => this.pessoa = pessoa,
          error => console.log(error)
        );
      } else {
        this.pessoasService.getPessoa(id).subscribe(
          pessoa => this.pessoaForm.patchValue(pessoa),
          error => console.log(error)
        );
      }
    }
  }

}
