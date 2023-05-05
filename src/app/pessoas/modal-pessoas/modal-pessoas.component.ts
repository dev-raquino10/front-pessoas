import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pessoa } from '../../pessoa'

@Component({
  selector: 'app-modal-pessoas',
  templateUrl: './modal-pessoas.component.html',
  styleUrls: ['./modal-pessoas.component.scss']
})
export class ModalPessoasComponent implements OnInit {
  pessoaSelecionada: Pessoa;

  @Output() pessoaSelecionadaChange = new EventEmitter<any>();
  
  fecharModal() {
    this.pessoaSelecionada = null;
    this.pessoaSelecionadaChange.emit(this.pessoaSelecionada);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
