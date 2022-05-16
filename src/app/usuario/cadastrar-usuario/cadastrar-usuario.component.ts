import { FirestoreUsuarioService } from './../../share/services/firestore-usuario.service';
import { USUARIO } from './../../share/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario:USUARIO

  constructor(private usuarioService:FirestoreUsuarioService) { 
    this.usuario = new USUARIO()
  }

  ngOnInit(): void {
  }
  inserirUsuario(){
    this.usuarioService.cadastrar(this.usuario).subscribe(
      usuario => console.log(usuario)
    )
  }

}