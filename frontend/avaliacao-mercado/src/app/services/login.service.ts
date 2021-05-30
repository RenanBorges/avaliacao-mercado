import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import BaseHttpOptions from '../classes/baseHttpOption';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'https://dev.sitemercado.com.br/api/login';

  constructor(protected httpClient: HttpClient) {}
  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(username: string, password: string): Observable<boolean | string> {
    var base64encodedData = btoa(username + ':' + password);
    var headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + base64encodedData,
      }),
    };
    return this.httpClient.post<boolean | string>(
      this.apiUrl,
      JSON.stringify({ username: username, Password: password }),
      headers
    );
  }
}
