import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            {path: 'profile/:id', component: UserProfileComponent},
            {path: 'list', component: UserListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
