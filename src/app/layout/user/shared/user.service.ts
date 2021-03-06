import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {AppConfig} from '../../../config/app.config';

import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {AuthGuard} from '../../../shared/guard';


@Injectable()
export class UserService {
    private headers: HttpHeaders;
    private userUrl: string;

    constructor(private http: HttpClient, private authGuard: AuthGuard) {
        this.userUrl = environment.url + AppConfig.endpoints.admin.user;
        this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }

    getUserList(): Observable<User[]> {
        return this.http
            .get(this.userUrl)
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    getProfile(username: string): Observable<User> {
        return this.http
            .post(this.userUrl + AppConfig.endpoints.admin.profile, JSON.stringify({
                username: username
            }), {headers: this.headers})
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    getUserById(id: number): Observable<User> {
        return this.http
            .get(this.userUrl + '/' + id)
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    updateProfile(u: User, id: number): Observable<User> {
        return this.http
            .put(this.userUrl + '/' + id, JSON.stringify({
                name: u.name,
                // username: u.username,
                phone: u.phone,
                gender: u.gender,
                about: u.about
            }), {headers: this.headers})
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    updateStatus(id: number, status: string): Observable<User> {
        return this.http
            .put(this.userUrl + '/' + id, JSON.stringify({
                status: status
            }), {headers: this.headers})
            .map(response => {
                return response;
            })
            .catch(error => this.handleError(error));
    }

    enabledDisabledUser(id: number): Observable<User> {
        return this.http
            .put(this.userUrl + AppConfig.endpoints.admin.enableUser, JSON.stringify({id: id}), {headers: this.headers})
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
