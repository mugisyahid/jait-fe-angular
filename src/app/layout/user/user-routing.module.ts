import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            {path: 'profile', component: UserProfileComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
