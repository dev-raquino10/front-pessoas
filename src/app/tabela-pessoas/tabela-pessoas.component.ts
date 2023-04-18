import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetalhesComponent } from '../modal-detalhes/modal-detalhes.component';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.css']
})
export class TabelaPessoasComponent {
  pessoas: Pessoa[] = [
    { id: 1, nome: 'João', nomeCompleto: 'João da Silva', nomeFamilia: 'Silva', grupo: 'Grupo 1', privilegio: 'Ancião', tipoPublicador: 'Publicador', dtNascimento: '01/01/1990', dtBatismo: '01/01/2000', sexo: 'Masculino', telefone: '(11) 1234-5678', endereco: 'Rua A, 123' },
    { id: 2, nome: 'Maria', nomeCompleto: 'Maria Souza', nomeFamilia: 'Souza', grupo: 'Grupo 2', privilegio: 'Servo ministerial', tipoPublicador: 'Publicador', dtNascimento: '02/02/1995', dtBatismo: '02/02/2010', sexo: 'Feminino', telefone: '(11) 9876-5432', endereco: 'Rua B, 456' },
    // Adicione mais objetos Pessoa conforme necessário
  ];

  displayedColumns: string[] = ['nome', 'nomeCompleto', 'grupo', 'privilegio'];

  constructor(public dialog: MatDialog) { }

  verDetalhes(pessoa: Pessoa): void {
    const dialogRef = this.dialog.open(ModalDetalhesComponent, {
      width: '450px',
      data: pessoa
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado.');
    });
  }

  // Resto do código do componente
}
