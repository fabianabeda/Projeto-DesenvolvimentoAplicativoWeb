import { FirestoreImovelService } from './../../share/services/firestore-imovel.service';
import { Imovel } from './../../share/imovel';
import { ImovelService } from './../../share/services/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-cadas-descricao',
  templateUrl: './imovel-cadas-descricao.component.html',
  styleUrls: ['./imovel-cadas-descricao.component.css']
})
export class ImovelCadasDescricaoComponent implements OnInit {

  imovel:Imovel
  constructor(private imovelService:ImovelService) {
    this.imovel = imovelService.getImovel()
   }

  ngOnInit(): void {
  }
 
  inserirImovel():void{
    this.imovelService.inserir().subscribe(
      imovel => console.log(imovel)
    );

  }

  
}
