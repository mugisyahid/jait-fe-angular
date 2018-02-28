import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './shared/register.service';
import {Router} from '@angular/router';
import {Register} from './shared/register.model';
import {AuthGuard} from '../shared/guard';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    private registerForm: FormGroup;
    private error: String;

    constructor(private authGuard: AuthGuard, public router: Router, private registerService: RegisterService,
                private formBuilder: FormBuilder) {
        this.registerForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'username': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required]]
        });
    }

    ngOnInit() {
        if (this.authGuard.isLoggedIn()) {
            this.router.navigateByUrl('/dashboard');
        }
    }

    register(l: Register) {
        console.log(l);
        this.registerService.register(l).subscribe((user) => {
            this.router.navigateByUrl('/login');
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'error Has Ocurred';
            }
        });
    }
}
