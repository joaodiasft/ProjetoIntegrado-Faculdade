import { Produto } from './../model/produto.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutosComponent } from '../produtos/produtos.component';

const url = 'https://localhost:8080/produto';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application;json'})
}
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }


adicionar (Produto: any) : Observable<Produto>{
  return this.http.post<Produto>(url, Produto, httpOptions);
}

alterar(id: any,Produto: any) : Observable<any>{
  const urlLocal = `${url}/${id}`;
  return this.http.put(urlLocal,Produto, httpOptions)
}

remover(id: any) : Observable<Produto>{
  const urlLocal = `${url}/${id}`;
  return this.http.delete<Produto>(urlLocal,httpOptions);
}

}
