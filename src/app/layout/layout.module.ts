import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from '../home/pesquisa/pesquisa.component';
import { CarrosselComponent } from '../home/carrossel/carrossel.component';
import { ExperienciasComponent } from '../home/experiencias/experiencias.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
