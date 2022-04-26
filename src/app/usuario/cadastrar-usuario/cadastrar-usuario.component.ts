import { usuarios } from './../../../share/usuarios';
import { USUARIO } from './../../../share/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario:USUARIO
  usuarios = usuarios

  constructor() {
    this.usuario = new USUARIO()
   }

  ngOnInit(): void {
  }

  inserirUsuario(){
    this.usuarios.push(this.usuario)
    this.usuario = new USUARIO()
  }

}