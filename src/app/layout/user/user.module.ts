import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from './../../shared';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';

@NgModule({
    imports: [CommonModule, UserRoutingModule, PageHeaderModule],
    declarations: [UserComponent, UserProfileComponent],
    providers: [UserService]
})
export class UserModule { }
