import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, tap } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/pessoas';
  private getPessoas = 'http://localhost:8080/api/pessoas/listarPessoas';
  private salvarPessoaUrl = 'http://localhost:8080/api/pessoas/cadastrar'
  private updatePessoaUrl = 'http://localhost:8080/api/pessoas/updatePessoa'
  private deletePessoaUrl = 'http://localhost:8080/api/pessoas/delete'
  private atualizarListaPessoas = new Subject<void>();
  handleError: any;

  public emitirAtualizacaoListaPessoas() {
    this.atualizarListaPessoas.next();
  }

  constructor(private http: HttpClient) { }

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.getPessoas);
  }

  getPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`);
  }

  salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    console.log(pessoa)
    return this.http.post<Pessoa>(this.salvarPessoaUrl, pessoa);
  }

  atualizarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.updatePessoaUrl}/${pessoa.id}`, pessoa).pipe(
      map(response => response as Pessoa)
    );
  }

  deletarPessoa(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${this.deletePessoaUrl}/${id}`).pipe(
      tap(() => {
        this.emitirAtualizacaoListaPessoas();
      }),
      catchError(this.handleError)
  );

  }}
