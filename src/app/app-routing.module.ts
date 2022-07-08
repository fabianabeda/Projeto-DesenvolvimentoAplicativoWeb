import { ReservasComponent } from './usuario/reservas/reservas.component';
import { ListarImoveisComponent } from './imovel/listar-imoveis/listar-imoveis.component';
import { ContentComponent } from './home/content/content.component';

import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { PerfilUsuarioComponent } from './usuario/perfil-usuario/perfil-usuario.component';
import { LoginUsuarioComponent } from './usuario/login-usuario/login-usuario.component';
import { ImovelCadasEnderecoComponent } from './imovel/imovel-cadas-endereco/imovel-cadas-endereco.component';
import { ImovelCadasComodosComponent } from './imovel/imovel-cadas-comodos/imovel-cadas-comodos.component';
import { ImovelCadasDescricaoComponent } from './imovel/imovel-cadas-descricao/imovel-cadas-descricao.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImoveisUsuComponent } from './usuario/imoveis-usu/imoveis-usu.component';

const routes: Routes = [
  {
    path:'',
    component:ContentComponent
  },

  {path:'login-usuario',
    component:LoginUsuarioComponent
  },
  {path:'cadastrar-usuario',
    component:CadastrarUsuarioComponent
  },
  {path:'perfil-usuario',
    component:PerfilUsuarioComponent
  },
  {
    path:'imoveis-usuario',
    component:ImoveisUsuComponent
  },
  {
    path:'cadastro-imovel-endereco',
    component:ImovelCadasEnderecoComponent
  },
  {
    path:'cadastro-imovel-comodos',
    component:ImovelCadasComodosComponent
  },
  {
    path:'cadastro-imovel-descricao',
    component:ImovelCadasDescricaoComponent
  },
  {
    path:'imoveis',
    component:ListarImoveisComponent
  },
  {
    path:'reservas',
    component:ReservasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
