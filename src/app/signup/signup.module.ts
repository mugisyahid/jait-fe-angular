import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RegisterService} from './shared/register.service';
import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {AuthGuard} from '../shared/guard';

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SignupComponent],
    providers: [RegisterService, AuthGuard]
})
export class SignupModule {
}
