import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthGuard } from '../../../shared/index';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';



@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

    user: User

    constructor(private authGuard: AuthGuard, private translate: TranslateService, public router: Router, private userService: UserService) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.userService.getProfile(this.authGuard.getUsername()).subscribe((user:User) =>{
            this.user = user
            //set id?
        })

    }

}
