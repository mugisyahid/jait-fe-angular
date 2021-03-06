import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared';

const routes: Routes = [
    // api
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
    {path: 'activation/:token', loadChildren: './activation/activation.module#ActivationModule'},
    // { path: 'product', loadChildren: './layout/product/product.module#ProductModule' },

    // secure
    {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},

    {path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule'},
    {path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
