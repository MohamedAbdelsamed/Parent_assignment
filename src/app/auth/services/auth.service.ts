import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://reqres.in/'
  constructor(private http: HttpClient) { }

  login(crediential){
    return this.http.post( this.url + 'api/login', crediential)
  }
}
