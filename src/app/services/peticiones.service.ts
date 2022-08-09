import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root' // Con esto, el servicio se provee a toda la App.
})
export class PeticionesService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://reqres.in/';
  }

  getUser(userId: string): Observable<any> {
    return this._http.get(this.url + 'api/users/' + userId);
  }

  addUser(user: any): Observable<any> {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'api/users', json, { headers });

  }
}
