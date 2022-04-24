import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    CadastrarUsuarioComponent ,
    LoginUsuarioComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CadastrarUsuarioComponent ,
    LoginUsuarioComponent ,
    PerfilUsuarioComponent,
  ]
})
export class HomeModule { }