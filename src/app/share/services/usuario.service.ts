import { usuarios } from './../usuarios';
import { USUARIO } from './../usuario';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  usuarios:Array<USUARIO>;

  usuario:USUARIO;

  constructor() { 
    this.usuarios = usuarios;
    this.usuario = new USUARIO()
  }

  listar(): Array<USUARIO>{
    return this.usuarios;
  }

  inserir() :void{
    this.usuarios.push(this.usuario)
    this.usuario = new USUARIO()
  }

}
