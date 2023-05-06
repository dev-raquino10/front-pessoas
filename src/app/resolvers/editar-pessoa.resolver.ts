import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa'
import { PessoaService } from '../pessoa.service';

@Injectable({ providedIn: 'root' })
export class EditarPessoaResolver implements Resolve<Pessoa> {

    constructor(private pessoaService: PessoaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pessoa> | Promise<Pessoa> | Pessoa {
        const id = route.paramMap.get('id');
        return this.pessoaService.getPessoa(id);
    }
}
