import { ContentComponent } from './home/content/content.component';

import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { PerfilUsuarioComponent } from './usuario/perfil-usuario/perfil-usuario.component';
import { LoginUsuarioComponent } from './usuario/login-usuario/login-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:ContentComponent
  },

  {path:'login',
    component:LoginUsuarioComponent
  },
  {path:'cadastro-usuario',
    component:CadastrarUsuarioComponent
  },
  {path:'perfil',
    component:PerfilUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
