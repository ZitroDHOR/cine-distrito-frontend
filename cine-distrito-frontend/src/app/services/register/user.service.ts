import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UserToRegiser } from 'src/app/models/userToRegister';
import { Observable } from 'rxjs';
import { SystemUserToCreate } from 'src/app/models/systemUserToCreate';
import { UserToSignIn } from 'src/app/models/userToSignIn';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { } 

  nuevoUsuario(userToRegister: UserToRegiser): Observable<UserToRegiser>{
    return this.http.post<UserToRegiser>('/usuario/nuevoUsuario', userToRegister);
  }

  crearUsuarioDeSistema(systemUserToCreate: SystemUserToCreate): Observable<SystemUserToCreate>{
    return this.http.post<SystemUserToCreate>('/oath', SystemUserToCreate);
  }

  signIn(userToSignin: UserToSignIn): Observable<UserToSignIn>{
    return this.http.post<UserToSignIn>('/signin', UserToSignIn);
  }
}

