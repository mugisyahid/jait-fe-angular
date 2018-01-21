import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './shared/register.service';
import { Router } from '@angular/router';
import { Register } from './shared/register.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    private registerForm: FormGroup
    private error: String

    constructor(public router: Router, private registerService: RegisterService, private formBuilder: FormBuilder) {
        this.registerForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'username': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required]]
        })
    }

    ngOnInit() { }

    register(l: Register) {
        this.registerService.register(l).subscribe((user) => {
            console.log(user)
        }, (response: Response) => {
            if (response.status != 200) {
                this.error = 'errorHasOcurred';
            }
        });
    }
}
