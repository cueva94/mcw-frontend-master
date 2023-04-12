import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CryptoUserService{

constructor( private _http: HttpClient){}

getCryptoUser(user_id:string): Observable<any>{
    return this._http.post('http://localhost:3000/api/cryptoUser/allCryptoUser', user_id )
  }

CryptoUserBuy(userBuy:{user_id: string, crypto_id:string, amount: string}): Observable<any>{
    return this._http.post('http://localhost:3000/api/cryptoUser/CryptoUserBuy', userBuy)
}
}