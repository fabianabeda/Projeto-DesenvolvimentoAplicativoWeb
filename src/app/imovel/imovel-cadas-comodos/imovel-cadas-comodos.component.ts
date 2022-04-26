import { ImovelService } from './../../share/services/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-cadas-comodos',
  templateUrl: './imovel-cadas-comodos.component.html',
  styleUrls: ['./imovel-cadas-comodos.component.css']
})
export class ImovelCadasComodosComponent implements OnInit {

  constructor(private ImovelService:ImovelService) {

  }

  ngOnInit(): void {
  }

}
