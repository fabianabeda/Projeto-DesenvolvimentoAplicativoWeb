import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/share/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private usuarioService:UsuarioService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if (this.usuarioService.isLogado()){
      this.router.navigate(['/perfil-usuario'])
    }else{
      this.router.navigate(['/login-usuario'])
    }
  }

}
