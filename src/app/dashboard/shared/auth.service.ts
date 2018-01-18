import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {environment} from '../../../environments/environment'

import {Auth} from './auth.model';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AuthService {
  private headers: HttpHeaders;
  private loginUrl: string;
  private registerUrl: string;
  private translations: any;

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }


  constructor(private http: HttpClient,
    private translateService: TranslateService,
    private snackBar: MatSnackBar) {
        this.loginUrl = environment.url + AppConfig.endpoints.login;
        this.registerUrl = environment.url + AppConfig.endpoints.register;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    login(l: any): Observable<Auth> {
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
      
      register(l: any): Observable<Auth> {
        return this.http
          .post(this.registerUrl, JSON.stringify({
            username: l.username,
            password: l.password
          }), {headers: this.headers})
          .map(response => {
            return response;
          })
          .catch(error => this.handleError(error));
      }


}