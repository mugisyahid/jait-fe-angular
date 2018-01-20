import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './shared/login.model';

import { LoginService } from './shared/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    
    private loginForm: FormGroup
    private error: String

    constructor(public router: Router, private loginService: LoginService, private formBuilder: FormBuilder) {

        this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
          });
    }

    ngOnInit() {}


    login(l: Login) {
        this.loginService.login(l).subscribe((user) => {
            console.log(user)
        }, (response: Response) => {
          if (response.status != 200) {
            this.error = 'errorHasOcurred';
          }
        });
    }
}
