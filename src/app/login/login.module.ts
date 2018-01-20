import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { LoginService } from './shared/login.service';
import { AuthGuard } from '../shared/index';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers:[LoginService, AuthGuard]
})
export class LoginModule {}
