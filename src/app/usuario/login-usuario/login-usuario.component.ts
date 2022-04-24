import { USUARIO } from './../../../share/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  usuario:USUARIO

  constructor() { 
    this.usuario = new USUARIO()
  }

  ngOnInit(): void {
  }
  inserirUsuario(){}
}