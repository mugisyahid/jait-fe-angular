import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';

import {LoginService} from './shared/login.service';
import {AuthGuard} from '../shared/index';
import {UserService} from '../layout/user/shared/user.service';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [LoginService, UserService, AuthGuard]
})
export class LoginModule {
}
