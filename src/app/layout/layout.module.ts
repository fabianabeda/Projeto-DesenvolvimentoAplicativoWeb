import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    PesquisaComponent,
    CarrosselComponent,
    ExperienciasComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
