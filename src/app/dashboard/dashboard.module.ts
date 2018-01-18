import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {LoginComponent} from './login/login.component'
import { DashboardComponent } from './dashboard.component';

import { AuthService } from './shared/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  providers:[
    AuthService
  ]
})
export class DashboardModule { }
