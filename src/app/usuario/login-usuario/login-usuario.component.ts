import { UsuarioService } from './../../share/services/usuario.service';
import { USUARIO } from '../../share/modelo/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/share/modelo/login';
 
@Component({
  selector: 'app-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  usuario:USUARIO

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService:UsuarioService,
    private router: Router,
    ){ 
    this.usuario = new USUARIO()
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        senha:['', [Validators.required]]
      }
    )
  }
  submitLogin(){
    // debugger
    
    let dadosLogin = this.loginForm.value as Login;

    if (this.usuarioService.loginUsuario(dadosLogin)) {
      
      this.router.navigate(['/'])
    }
  }
}