import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

import { ContentComponent } from './content/content.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';


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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  
  ],
  exports:[
    ContentComponent,
    PesquisaComponent,
  ]
})
export class HomeModule { }
