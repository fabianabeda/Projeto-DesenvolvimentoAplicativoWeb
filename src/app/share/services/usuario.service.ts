import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USUARIO } from '../modelo/usuario';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:8080/usuarios'

  constructor(private httpClient: HttpClient) { 
  }

  inserir(usuario:USUARIO): Observable<USUARIO>{
    return this.httpClient.post<USUARIO>(this.url,usuario)
  }

}
