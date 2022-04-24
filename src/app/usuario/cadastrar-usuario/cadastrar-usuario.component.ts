import { USUARIO } from './../../../share/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario:USUARIO

  constructor() {
    this.usuario = new USUARIO()
   }

  ngOnInit(): void {
  }

  inserirUsuario(){}

}