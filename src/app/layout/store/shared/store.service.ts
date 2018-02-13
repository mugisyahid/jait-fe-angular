import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {AppConfig} from '../../../config/app.config';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Store} from './store.model';

@Injectable()
export class StoreService {
    private headers: HttpHeaders;
    private storeUrl: string;

    constructor(private http: HttpClient) {
        this.storeUrl = environment.url + AppConfig.endpoints.admin.store;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    getUserStore(): Observable<Store> {
        return this.http.get(this.storeUrl)
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    createStore(s: any): Observable<any> {
        return this.http
            .post(this.storeUrl, JSON.stringify({
                name: s.name,
                description: s.description
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
