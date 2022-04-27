import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImovelCadasEnderecoComponent } from './imovel-cadas-endereco/imovel-cadas-endereco.component';
import { ImovelCadasComodosComponent } from './imovel-cadas-comodos/imovel-cadas-comodos.component';
import { ImovelCadasDescricaoComponent } from './imovel-cadas-descricao/imovel-cadas-descricao.component';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ListarImoveisComponent } from './listar-imoveis/listar-imoveis.component';



@NgModule({
  declarations: [
    ImovelCadasEnderecoComponent,
    ImovelCadasComodosComponent,
    ImovelCadasDescricaoComponent,
    ListarImoveisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
  ],
  exports:[
    ImovelCadasEnderecoComponent,
    ImovelCadasComodosComponent,
    ImovelCadasDescricaoComponent
  ]
})
export class ImovelModule { }
