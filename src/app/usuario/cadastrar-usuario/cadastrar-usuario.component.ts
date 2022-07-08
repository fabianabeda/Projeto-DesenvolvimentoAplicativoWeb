import { FirestoreUsuarioService } from './../../share/services/firestore-usuario.service';
import { USUARIO } from '../../share/modelo/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/share/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario:USUARIO

  constructor(
    private usuarioService:UsuarioService,
    private router: Router
    ) { 
    this.usuario = new USUARIO()
  }

  ngOnInit(): void {
  }
  inserirUsuario(){
    this.usuarioService.inserir(this.usuario).subscribe(
      usuario => {
        console.log(usuario)
        this.router.navigate(['/'])
      }
    )
  }

}