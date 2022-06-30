import { FirestoreImovelService } from './../../share/services/firestore-imovel.service';
import { Imovel } from './../../share/imovel';
import { ImovelService } from './../../share/services/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-imoveis',
  templateUrl: './listar-imoveis.component.html',
  styleUrls: ['./listar-imoveis.component.css']
})
export class ListarImoveisComponent implements OnInit {

  imoveis: Array<Imovel>;

  constructor(private imovelService:ImovelService) { 
    this.imoveis = new Array<Imovel>()
  }
  
  ngOnInit(): void {
    this.imovelService.listar().subscribe(
      imoveis => this.imoveis = imoveis
    )
  }

}
