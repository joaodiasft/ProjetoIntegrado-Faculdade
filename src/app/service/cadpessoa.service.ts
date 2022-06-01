import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cadpessoas } from '../model/cadpessoas.model';


const url = 'https://localhost:8080/produto';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application;json'})
}
@Injectable({
  providedIn: 'root'
})
export class CadpessoaService {

  constructor(private http: HttpClient) { }

  adicionar(Pessoa: Cadpessoas):Observable<Cadpessoas>{
    return this.http.post<Cadpessoas>(url,Pessoa, httpOptions);
  }
  alterar(id: number | undefined,Pessoa: Cadpessoas):Observable<any> {
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Pessoa,httpOptions);
  }
  remover (id: number | undefined): Observable<Cadpessoas> {
    const urlLocal =  `${url}/${id}`;
    return this.http.delete<Cadpessoas>(urlLocal,httpOptions);
  }










}
