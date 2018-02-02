import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {AppConfig} from '../../config/app.config';


import {Register} from './register.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterService {
    private headers: HttpHeaders;
    private registerUrl: string;

    constructor(private http: HttpClient) {
        this.registerUrl = environment.url + AppConfig.endpoints.api.register;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    register(l: any): Observable<Register> {
        return this.http
            .post(this.registerUrl, JSON.stringify({
                username: l.username,
                password: l.password,
                name: l.name,
                // standard value
                enabled: false, // admin must approve
                accountExpired: false,
                accountLocked: false,
                passwordExpired: false,
                remark: 'new user',
                imageName: 'user1.png',
                roles: ['ROLE_CUSTOMER']
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