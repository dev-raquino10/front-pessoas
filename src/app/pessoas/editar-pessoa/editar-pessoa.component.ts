import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pessoa } from '../../models/pessoa.model'


@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  isModalOpen = true;
  @Output() pessoaAtualizada = new EventEmitter<Pessoa>();
  

  @Input() form: FormGroup;
  @Input() pessoa: Pessoa;
  @Input() modal: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [''],
      nomeCompleto: [''],
      nomeFamilia: [''],
      grupo: [''],
      tipoPublicador: [''],
      privilegio: [''],
      sexo: [''],
      dtNascimento: [''],
      dtBatismo: [''],
      telefone: [''],
      endereco: [''],
    });

    this.form.patchValue(this.pessoa);
  }

  atualizarPessoa() {
    const pessoaAtualizada = this.form.value as Pessoa;
    this.pessoaAtualizada.emit(pessoaAtualizada);
  }  

}
