import { USUARIO } from './../modelo/usuario';
import { UsuarioService } from 'src/app/share/services/usuario.service';
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
  usuLogado: USUARIO;

  // imoveis: Array<Imovel>;


  constructor(
    private httpCliente:HttpClient,
    private usuarioService: UsuarioService
    ) {
    this.imovel = new Imovel()
    this.usuLogado = this.usuarioService.getLogado()
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

  // CADASTRA UM NOVO IMOVEL USANDO O USUARIO LOGADO COMO DONO
  inserir():Observable<Imovel>{
    this.imovel.locatario = this.usuarioService.getLogado()
    console.log(this.imovel.locatario.nome)
    return this.httpCliente.post<Imovel>(`${this.url}/${this.imovel.locatario.id}`,this.imovel)
  }

  // LISTA OS IMOVEIS DE UM DETERMINADO USUARIO
  imoveisUsuario():Observable<Imovel[]>{
    return this.httpCliente.get<Array<Imovel>>(`${this.url}/usuario/${this.usuLogado.id}`)
  }
}
