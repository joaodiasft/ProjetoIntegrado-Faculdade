import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {ScrollTopModule} from 'primeng/scrolltop';
import {CaptchaModule} from 'primeng/captcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
//import {routing} from './app-routing.module'
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ContatoComponent } from './contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CardModule} from 'primeng/card';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';

import { FormsModule } from '@angular/forms';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdutosComponent,
    CarrinhoComponent,
    ContatoComponent,
    CadastrosComponent,
    CadprodutoComponent,
    PessoaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ScrollTopModule,
    CaptchaModule,
    //routing,
    BrowserAnimationsModule,
    MatToolbarModule,
    ProgressSpinnerModule,
    FontAwesomeModule,
    CardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
