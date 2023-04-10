import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CryptoService{

    constructor(private _http: HttpClient){}

    getCryptoList(): Observable<any>{
        return this._http.get('http://localhost:3000/api/crypto/allCrypto')
    }
}