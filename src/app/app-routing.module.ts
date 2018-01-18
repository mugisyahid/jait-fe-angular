import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppConfig} from './config/app.config';

import {HomeComponent} from './dashboard/home/home.component';
import {LoginComponent} from './dashboard/login/login.component'
import {RegisterComponent} from './dashboard/register/register.component'

import {Error404Component} from './core/error404/error-404.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  
  {path: '', component: HomeComponent},
  {path: AppConfig.routes.login, component: LoginComponent},
  {path: AppConfig.routes.register, component: RegisterComponent},
  
  {path: AppConfig.routes.dashboard.home, loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},

  {path: AppConfig.routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
