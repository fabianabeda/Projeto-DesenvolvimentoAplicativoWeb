import { from, Observable } from 'rxjs';
import { USUARIO } from '../modelo/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUsuarioService {

  colecaoUsuarios: AngularFirestoreCollection<USUARIO>
  NOME_COLECAO = 'usuario'

  constructor(private AFireStore:AngularFirestore) {
    this.colecaoUsuarios = AFireStore.collection(this.NOME_COLECAO)
   }

  cadastrar(usuario:USUARIO): Observable<Object>{
    delete usuario.id;
    return from(this.colecaoUsuarios.add(Object.assign({},usuario)));
  }
  
}
