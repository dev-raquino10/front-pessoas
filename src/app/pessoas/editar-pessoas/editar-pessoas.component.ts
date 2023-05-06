import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../pessoa'
import { PessoaService } from '../../pessoa.service';

@Component({
  selector: 'app-editar-pessoas',
  templateUrl: './editar-pessoas.component.html',
  styleUrls: ['./editar-pessoas.component.css']
})
export class EditarPessoasComponent implements OnInit {

  pessoa: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // converte para número
    this.pessoaService.getPessoa(id).subscribe(pessoa => {
      this.pessoa = pessoa;
    });
  }

  atualizarPessoa(pessoa: Pessoa): void {
    this.pessoaService.atualizarPessoa(pessoa).subscribe(() => {
      this.router.navigate(['/pessoas']);
    });
  }
}
