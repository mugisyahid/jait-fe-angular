import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {AppConfig} from '../../config/app.config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivationService {
    private headers: HttpHeaders;
    private activationUrl: string;

    constructor(private http: HttpClient) {
        this.activationUrl = environment.url + AppConfig.endpoints.api.activate;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    activate(l: string): Observable<any> {
        return this.http
            .post(this.activationUrl, JSON.stringify({
                token: l
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