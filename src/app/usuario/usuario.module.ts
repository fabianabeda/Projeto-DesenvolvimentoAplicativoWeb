import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario.component/cadastrar-usuario.component';
import { LoginUsuarioComponent } from './login-usuario.component/login-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario.component/perfil-usuario.component';

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