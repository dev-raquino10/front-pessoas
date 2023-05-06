import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pessoa } from '../pessoa'
import { PessoaService } from '../pessoa.service';

@Injectable({
  providedIn: 'root',
})
export class PessoaResolver implements Resolve<Pessoa> {
  constructor(private pessoaService: PessoaService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pessoa> {
    const pessoaSelecionada = history.state.pessoa;
    if (pessoaSelecionada) {
      return of(pessoaSelecionada);
    }
    return this.pessoaService.getPessoa(route.params['id']).pipe(
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }
}
