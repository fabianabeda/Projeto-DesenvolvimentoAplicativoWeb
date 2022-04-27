import { UsuarioService } from './../../share/services/usuario.service';
import { USUARIO } from './../../share/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario:USUARIO

  constructor(private usuarioService:UsuarioService) { 
    this.usuario = new USUARIO()
  }

  ngOnInit(): void {
  }
  inserirUsuario(){
    this.usuarioService.inserir(this.usuario).subscribe(
      usuario => console.log(usuario)
    )
  }

}