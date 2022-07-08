import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { ImoveisUsuComponent } from './imoveis-usu/imoveis-usu.component';



@NgModule({
  declarations: [
    CadastrarUsuarioComponent ,
    PerfilUsuarioComponent,
    ReservasComponent,
    ImoveisUsuComponent,
    LoginUsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    CadastrarUsuarioComponent ,
    PerfilUsuarioComponent,
  ]
})
export class UsuarioModule { }