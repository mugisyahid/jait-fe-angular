import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { AppConfig } from '../../../config/app.config';


import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private headers: HttpHeaders;
  private userUrl: string;

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }


  constructor(private http: HttpClient) {
    this.userUrl = environment.url + AppConfig.endpoints.admin.user;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }
  
  getProfile(username: string): Observable<User> {
    return this.http
      .post(this.userUrl+AppConfig.endpoints.admin.profile, JSON.stringify({
        username: username
      }), { headers: this.headers })
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }
  


}