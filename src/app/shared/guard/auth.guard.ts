import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import * as moment from 'moment';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (this.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    public setSession(authResult) {
        const expiresAt = moment().add(authResult.expires_in, 'second');
        localStorage.setItem('username', authResult.username);
        localStorage.setItem('token', authResult.access_token);
        localStorage.setItem('refresh_token', authResult.refresh_token);
        localStorage.setItem('expires_in', JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('roles', authResult.roles); // backend will validate its value
    }

    public setUserId(userId) {
        localStorage.setItem('user_id', userId);
    }

    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('user_id');
        localStorage.removeItem('roles');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_in');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    getUsername() {
        return localStorage.getItem('username');
    }

    getUserId() {
        return localStorage.getItem('user_id');
    }

    geRoles() {
        return localStorage.getItem('roles');
    }
}
