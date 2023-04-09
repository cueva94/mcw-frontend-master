import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient ) { }

register(user: users ){
    return this._http.post('http://localhost:3000/api/users/add',user)
}
  
login(user: users){
return this._http.post('http://localhost:3000/api/users/login', user)
}


}
