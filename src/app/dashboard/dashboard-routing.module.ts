import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', component: HomeComponent},  
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule {
}
