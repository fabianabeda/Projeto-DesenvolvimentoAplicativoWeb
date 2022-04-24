import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    CadastrarUsuarioComponent ,
    LoginUsuarioComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    
  ],
  exports:[
    CadastrarUsuarioComponent ,
    LoginUsuarioComponent ,
    PerfilUsuarioComponent,
  ]
})
export class UsuarioModule { }