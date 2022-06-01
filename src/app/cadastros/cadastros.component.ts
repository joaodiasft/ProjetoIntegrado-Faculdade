import { Component, OnInit } from '@angular/core';
import { CANCELLED } from 'dns';
import { Cadpessoas } from '../model/cadpessoas.model';
import { CadpessoaService } from '../service/cadpessoa.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

  lista:Cadpessoas[] = [];
  obj:Cadpessoas= new Cadpessoas();
  mens='';


  constructor(private api: CadpessoaService) { }

  ngOnInit(): void {
  }

  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then((Cadpessoas =>{
      this.mens = Cadpessoas.nome + "Foi add";
    })
 }

 alterar(){
  this.api.alterar(this.obj.id, this.obj)
  .toPromise()
  .then((Cadpessoas =>{
    this.mens = Cadpessoas.nome + "Foi alterado";
  })
 }

 remover(){
  this.api.remover(this.obj.id)
  .toPromise()
  .then((Cadpessoas =>{
    this.mens = Cadpessoas.nome + "Foi apagado";
  })

 }

carregarDados(p: Cadpessoas){
  this.obj = p;
}




}
