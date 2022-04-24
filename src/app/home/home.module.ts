import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

import { MatCardModule} from '@angular/material/card';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    PesquisaComponent,
    CarrosselComponent,
    ExperienciasComponent,
    ContentComponent,
    
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    
  ],
  exports:[
    ContentComponent
  ]
})
export class HomeModule { }
