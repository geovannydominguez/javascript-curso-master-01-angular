import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://reqres.in/';
  }

  getUser() {
    return this._http.get(this.url + 'api/users/2');
  }
}
