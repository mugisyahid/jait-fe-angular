import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {PageHeaderModule} from './../../shared';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserService} from './shared/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {UserListComponent} from './user-list/user-list.component';
import {ImageService} from '../shared/image.service';

@NgModule({
    imports: [CommonModule,
        UserRoutingModule,
        PageHeaderModule,
        FormsModule,
        TranslateModule,
        NgbModule.forRoot(),
        ReactiveFormsModule],
    declarations: [UserComponent, UserProfileComponent, UserListComponent],
    providers: [UserService, ImageService]
})
export class UserModule {
}
