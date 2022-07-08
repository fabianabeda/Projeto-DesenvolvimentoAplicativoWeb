import { UsuarioService } from 'src/app/share/services/usuario.service';
import { FirestoreImovelService } from './../../share/services/firestore-imovel.service';
import { Imovel } from '../../share/modelo/imovel';
import { ImovelService } from './../../share/services/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-cadas-descricao',
  templateUrl: './imovel-cadas-descricao.component.html',
  styleUrls: ['./imovel-cadas-descricao.component.css']
})
export class ImovelCadasDescricaoComponent implements OnInit {

  imovel:Imovel
  constructor(private imovelService:ImovelService, private usuarioService: UsuarioService) {
    this.imovel = imovelService.getImovel()
    this.imovel.locatario = usuarioService.getLogado()
    console.log('teste e recebimento: '+this.imovel.locatario.nome)
   }

  ngOnInit(): void {
  }
 
  inserirImovel():void{
    this.imovelService.inserir().subscribe(
      imovel => console.log(imovel)
    );
    this.imovel = new Imovel();

  }

  
}
