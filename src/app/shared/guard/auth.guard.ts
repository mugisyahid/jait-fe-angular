import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import * as moment from 'moment'; // add this 1 of 4

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

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
    }

    logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("expires_in");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_in");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
