import { usuarios } from './../usuarios';
import { imoveis } from './../imoveis';
import { Imovel } from './../imovel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImovelService {

  imovel: Imovel;
  imoveis: Array<Imovel>;

  constructor() {
    this.imovel = new Imovel();
    this.imoveis = imoveis;
   } 

  listar():Array<Imovel>{
     return this.imoveis;
  }

  inserir():void{
    this.imoveis.push(this.imovel);
    this.imovel = new Imovel();
  }


}
