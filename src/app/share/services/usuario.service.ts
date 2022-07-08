import { Login } from 'src/app/share/modelo/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USUARIO } from '../modelo/usuario';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // GUARDA O USUARIO QUE ESTA LOGADO 
  usuarioLogado!: USUARIO;


  url = 'http://localhost:8080/usuarios'

  constructor(private httpClient: HttpClient) { 
  }

  inserir(usuario:USUARIO): Observable<USUARIO>{
    return this.httpClient.post<USUARIO>(this.url,usuario)
  }

  loginUsuario(login:Login){
    const resultado = this.httpClient.post<USUARIO>(`${this.url}/login`,login)

    if(resultado){
      this.usuarioLogado = new USUARIO()
      resultado.subscribe(
        res => {
          this.usuarioLogado.email = res.email
          this.usuarioLogado.nome = res.nome
          this.usuarioLogado.id = res.id
        }
      )
    }
    return true
  }

  isLogado(){
    if (this.usuarioLogado){
      return true
    }else return false
  }

  getLogado(){
    return this.usuarioLogado
  }

}
