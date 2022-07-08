import { USUARIO } from './../../share/modelo/usuario';
import { UsuarioService } from 'src/app/share/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario!: USUARIO;
  
  constructor(private usuarioService: UsuarioService) {
    this.usuario = new USUARIO()
   }
  
  ngOnInit(): void {
    this.usuario = this.usuarioService.getLogado()
  }

}