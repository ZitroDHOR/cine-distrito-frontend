import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UserToRegiser } from 'src/app/models/userToRegister';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _uri = '/usuario';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { } 

  nuevoUsuario(userToRegister: UserToRegiser): Observable<UserToRegiser>{
    return this.http.post<UserToRegiser>('${this._uri}'+'/nuevoUsuario', userToRegister);
  }
}

