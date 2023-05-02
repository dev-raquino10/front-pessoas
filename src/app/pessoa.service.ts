import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) { }

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseUrl);
  }

  getPessoa(id: number): Observable<Pessoa> {
    const urlPessoa = `${this.baseUrl}/${id}`;
    return this.http.get<Pessoa>(urlPessoa);
  }
}
