import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthGuard} from '../../../shared/index';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../../router.animations';
import {Gender} from '../shared/gender.model';
import {environment} from '../../../../environments/environment';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    animations: [routerTransition()]
})
export class UserListComponent implements OnInit {

    userList: User[];

    constructor(private authGuard: AuthGuard, private translate: TranslateService, public router: Router,
                private userService: UserService, private formBuilder: FormBuilder) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

    }

    ngOnInit() {
        this.userService.getUserList().subscribe((users: Array<User>) => this.userList = users);
    }

    enabledDisabledUser(id: number, i: number) {
        this.userService.enabledDisabledUser(id).subscribe((user) => {
            // change user
            this.userList[i] = user;
        }, (response: Response) => {
            if (response.status !== 200) {
            }
        });

    }

}
