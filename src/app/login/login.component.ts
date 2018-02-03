import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Login} from './shared/login.model';
import {LoginService} from './shared/login.service';
import {AuthGuard} from '../shared/index';
import {UserService} from '../layout/user/shared/user.service';
import {User} from '../layout/user/shared/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private error: String;

    constructor(public router: Router, private userService: UserService,
                private loginService: LoginService, private formBuilder: FormBuilder,
                private authGuard: AuthGuard) {

        this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required]]
        });
    }

    ngOnInit() {
        if (this.authGuard.isLoggedIn()) {
            this.router.navigateByUrl('/dashboard');
        }
    }


    login(l: Login) {
        this.loginService.login(l).subscribe((user) => {
            this.authGuard.setToken(user.access_token)
            this.userService.getProfile(user.username).subscribe((u: User) => {
                if (u.enabled) {
                    this.authGuard.setSession(user);
                    this.authGuard.setUserId(u.id);
                    this.router.navigateByUrl('/dashboard');
                } else {
                    this.error = 'Your accoutn still disable, Please contact Administrator';
                }
            });
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'Incorrect username or password';
            }
        });
    }
}
