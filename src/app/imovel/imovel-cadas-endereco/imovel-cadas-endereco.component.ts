import { FirestoreImovelService } from './../../share/services/firestore-imovel.service';
import { Imovel } from '../../share/modelo/imovel';
import { USUARIO } from '../../share/modelo/usuario';
import { ImovelService } from './../../share/services/imovel.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-imovel-cadas-endereco',
  templateUrl: './imovel-cadas-endereco.component.html',
  styleUrls: ['./imovel-cadas-endereco.component.css']
})

export class ImovelCadasEnderecoComponent implements OnInit {

  imovel :Imovel
  constructor( private imovelService:ImovelService) {
      this.imovel = this.imovelService.getImovel()
     }


  ngOnInit(): void {
  }

  

  
}
