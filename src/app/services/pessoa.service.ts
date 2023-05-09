import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/pessoas';
  private getPessoas = 'http://localhost:8080/api/pessoas/listarPessoas';
  private salvarPessoaUrl = 'http://localhost:8080/api/pessoas/cadastrar'
  private updatePessoa = 'http://localhost:8080/api/pessoas/updatePessoa'

  constructor(private http: HttpClient) { }

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.getPessoas);
  }

  getPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`);
  }

  cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.salvarPessoaUrl, pessoa);
  }

  atualizarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.updatePessoa}/${pessoa.id}`, pessoa).pipe(
      map(response => response as Pessoa)
    );
  }
  
}
