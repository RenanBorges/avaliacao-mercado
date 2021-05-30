import { HttpClient, HttpHeaders } from '@angular/common/http';

export default class BaseHttpOptions {
  constructor(protected httpClient: HttpClient) {}
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
