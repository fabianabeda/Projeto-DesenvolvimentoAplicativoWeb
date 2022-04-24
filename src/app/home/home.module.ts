import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PesquisaComponent,
    CarrosselComponent,
    ExperienciasComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    
  ],
  exports:[
    PesquisaComponent,
    CarrosselComponent,
    ExperienciasComponent,
  ]
})
export class HomeModule { }
