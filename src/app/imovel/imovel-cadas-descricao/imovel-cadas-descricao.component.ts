import { ImovelService } from './../../share/services/imovel.service';
import { UsuarioService } from './../../share/services/usuario.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-cadas-descricao',
  templateUrl: './imovel-cadas-descricao.component.html',
  styleUrls: ['./imovel-cadas-descricao.component.css']
})
export class ImovelCadasDescricaoComponent implements OnInit {

  constructor(private ImovelService:ImovelService) {
   
   }

  ngOnInit(): void {
  }

  
}
