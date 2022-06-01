import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto.model';






@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {
  ngOnInit(): void {
   }

   lista: Produto[] = [];
  obj: Produto = new Produto();
  mens='';

  constructor(private api:ProdutoService) { }

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then((Produto =>{
      this.mens = Produto.nome + "Foi add";
    })
 }


 alterar(): void{
  this.api.alterar(this.obj.id, this.obj)
  .toPromise()
  .then((Produto =>{
    this.mens = Produto.nome + "Foi alterado";
  })
 }


 remover(){
  this.api.remover(this.obj.id)
  .toPromise()
  .then((Produto =>{
    this.mens = Produto.nome + "Foi apagado";
  })

 }


 carregarDados(p: Produto){
  this.obj = p;
}





}
