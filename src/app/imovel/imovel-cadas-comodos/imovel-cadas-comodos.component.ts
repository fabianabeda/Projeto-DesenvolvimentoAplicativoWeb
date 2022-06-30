import { FirestoreImovelService } from './../../share/services/firestore-imovel.service';
import { Imovel } from './../../share/imovel';
import { ImovelService } from './../../share/services/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-cadas-comodos',
  templateUrl: './imovel-cadas-comodos.component.html',
  styleUrls: ['./imovel-cadas-comodos.component.css']
})
export class ImovelCadasComodosComponent implements OnInit {
  imovel:Imovel
  constructor(private imovelService:ImovelService) {
    this.imovel = this.imovelService.getImovel()
  }

  ngOnInit(): void {
  }

}
