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

  constructor() { }

  submitForm() {
    // aqui você pode adicionar o código para enviar os dados do formulário para um serviço de backend ou armazená-los localmente
    console.log('Formulário enviado com sucesso!');
  }

}
