import { Imovel } from '../modelo/imovel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImovelService {
  
  url = 'http://localhost:8080/imoveis';
  imovel: Imovel;
  // imoveis: Array<Imovel>;


  constructor( private httpCliente:HttpClient) {
    this.imovel = new Imovel()
  } 

  listar():Observable<Imovel[]>{
    return this.httpCliente.get<Array<Imovel>>(this.url);
  }

  passImovel(imovel: Imovel) {
    this.imovel = imovel
  }

  getImovel():Imovel{
    return this.imovel
  }

  inserir():Observable<Imovel>{
    return this.httpCliente.post<Imovel>(this.url,this.imovel)
  }

  


}
