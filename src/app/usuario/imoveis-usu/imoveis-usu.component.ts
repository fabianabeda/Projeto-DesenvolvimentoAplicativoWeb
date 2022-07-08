import { UsuarioService } from 'src/app/share/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/share/modelo/imovel';
import { ImovelService } from 'src/app/share/services/imovel.service';

@Component({
  selector: 'app-imoveis-usu',
  templateUrl: './imoveis-usu.component.html',
  styleUrls: ['./imoveis-usu.component.css']
})
export class ImoveisUsuComponent implements OnInit {

  imoveis: Array<Imovel>;

  constructor(
    private imovelService:ImovelService,
    private usuarioService: UsuarioService
    ) { 
    this.imoveis = new Array<Imovel>()
  }
  
  ngOnInit(): void {
    this.imovelService.imoveisUsuario().subscribe(
      imoveis => this.imoveis = imoveis
    )
  }

}
