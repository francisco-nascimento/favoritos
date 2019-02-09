import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../models/filme';

const filmesApiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getListaFilmes(): Observable<Filme[]> {
    const url = filmesApiUrl + '/filmes';
    return this.http.get<Filme[]>(url);
  }

  getFilme(id: number): Observable<Filme> {
    const url = filmesApiUrl + '/filme/' + id;
    return this.http.get<Filme>(url);
  }

  adicionarFilme(filme: Filme): Observable<Filme> {
    const url = filmesApiUrl + '/filme';
    return this.http.post<Filme>(url, filme);
  }

  atualizarFilme(filme: Filme): Observable<Filme> {
    const url = filmesApiUrl + '/filme/' + filme.codigo;
    return this.http.put<Filme>(url, filme);
  }

  excluirFilme(id: number): Observable<Filme> {
    const url = filmesApiUrl + '/filme/' + id;
    return this.http.delete<Filme>(url);
  }

}
