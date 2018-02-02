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
    }


    login(l: Login) {
        this.loginService.login(l).subscribe((user) => {
            this.authGuard.setSession(user);
            this.userService.getProfile(this.authGuard.getUsername()).subscribe((u: User) => {
                this.authGuard.setUserId(u.id);
            });
            this.router.navigateByUrl('/dashboard');
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'Incorrect username or password';
            }
        });
    }
}
