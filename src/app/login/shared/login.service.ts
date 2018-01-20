import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AppConfig } from '../../config/app.config';


import {Login} from './login.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private headers: HttpHeaders;
  private loginUrl: string;

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }


  constructor(private http: HttpClient) {
        this.loginUrl = environment.url + AppConfig.endpoints.login;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    login(l: any): Observable<Login> {
        return this.http
          .post(this.loginUrl, JSON.stringify({
            username: l.username,
            password: l.password
          }), {headers: this.headers})
          .map(response => {
            return response;
          })
          .catch(error => this.handleError(error));
    }
}