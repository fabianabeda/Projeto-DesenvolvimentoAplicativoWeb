import { from, Observable } from 'rxjs';
import { Imovel } from './../imovel';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreImovelService {
  colecaoImoveis: AngularFirestoreCollection<Imovel>
  NOME_COLECAO = 'imoveis'

  imovel: Imovel

  constructor(private AFireStore:AngularFirestore) {
    this.colecaoImoveis = AFireStore.collection(this.NOME_COLECAO)
    this.imovel = new Imovel()
   }

  cadastrar(): Observable<Object>{
    delete this.imovel.id;
    return from(this.colecaoImoveis.add(Object.assign({},this.imovel)));
  }

  getImovel():Imovel{
    return this.imovel
  }

  listar():Observable<Imovel[]>{
    return this.colecaoImoveis.valueChanges({idField:'id'})
  }
  
}
