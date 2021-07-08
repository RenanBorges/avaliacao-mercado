import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ModelProduct, Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'https://localhost:5001/Products';

  constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  creatProduct(product: ModelProduct, img: any): Observable<any> {
    let formData = this.prepareProjectFormData(product, img);

    return this.httpClient
      .post<any>(this.baseUrl, formData)
      .pipe(catchError(this.handleError));
  }

  editProduct(product: ModelProduct, img: any, id: string): Observable<any> {
    let formData = this.prepareProjectFormData(product, img);
    return this.httpClient
      .put<any>(this.baseUrl + `/${id}`, formData)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `error: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  private prepareProjectFormData(product: any, img: any) {
    let formData: FormData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('image', img);
    return formData;
  }
}
