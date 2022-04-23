import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@NgModule({
  declarations: [
    PesquisaComponent,
    CarrosselComponent,
    ExperienciasComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class HomeModule { }
