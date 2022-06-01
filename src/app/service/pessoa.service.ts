import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/pessoas';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class PessoaService {

  constructor(private http: HttpClient) { }

  consultar (): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(url);
  }
  consultarPorId(id:number): Observable<Pessoa>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<Pessoa>(urlLocal);
  }
  adicionar(Pessoa: Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(url,Pessoa, httpOptions);
  }
  alterar(id: number | undefined,Pessoa: Pessoa):Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Pessoa,httpOptions);
  }
  excluir (id: number | undefined): Observable<Pessoa> {
    const urlLocal =  `${url}/${id}`;
    return this.http.delete<Pessoa>(urlLocal,httpOptions);
  }
}
