import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import * as moment from 'moment';
import {AppConfig} from "../../config/app.config";
import {isUndefined} from "util";

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
        // localStorage.setItem('token', authResult.access_token);
        localStorage.setItem('refresh_token', authResult.refresh_token);
        localStorage.setItem('expires_in', JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('roles', authResult.roles); // backend will validate its value
    }

    public setToken(token) {
        localStorage.setItem('token', token);
    }

    public setUserId(userId) {
        localStorage.setItem('user_id', userId);
    }

    public setName(name) {
        localStorage.setItem('name', name);
    }

    public setStore(storeId) {
        localStorage.setItem('store_id', storeId);
    }

    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('user_id');
        localStorage.removeItem('roles');
        localStorage.removeItem('store_id');
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

    getName() {
        return localStorage.getItem('name');
    }

    getUserId() {
        return localStorage.getItem('user_id');
    }

    getRoles() {
        return localStorage.getItem('roles');
    }

    isUserRole(role: string) {
        return this.getRoles().indexOf(role) !== -1;
    }


    isSysAdmin() {
        return this.isUserRole(AppConfig.roles.sysadmin);
    }

    isAdmin() {
        return this.isUserRole(AppConfig.roles.admin);
    }

    isCustomer() {
        return this.isUserRole(AppConfig.roles.customer);
    }

    isAnonymous() {
        return isUndefined(this.getRoles());
    }

}
