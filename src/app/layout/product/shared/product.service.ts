import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {AppConfig} from '../../../config/app.config';


import {Product} from './product.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private headers: HttpHeaders;
    private productUrl: string;

    constructor(private http: HttpClient) {
        this.productUrl = environment.url + AppConfig.endpoints.api.product;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productUrl)
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    createProduct(l: any, storeId: string): Observable<any> {
        return this.http
            .post(this.productUrl, JSON.stringify({
                name: l.name,
                price: l.price,
                quantity: l.quantity,
                description: l.description,
                storeId: storeId,
                imageName: 'default.png',
                productCategoryId: 1 // fix me
            }), {headers: this.headers})
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }


}