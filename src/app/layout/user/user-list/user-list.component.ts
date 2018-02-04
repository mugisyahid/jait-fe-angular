import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthGuard} from '../../../shared/index';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {FormBuilder} from '@angular/forms';
import {routerTransition} from '../../../router.animations';
import {AppConfig} from '../../../config/app.config';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    animations: [routerTransition()]
})
export class UserListComponent implements OnInit {

    userList: User[] = new Array();
    deletedUserList: User[] = new Array();

    constructor(private authGuard: AuthGuard, private translate: TranslateService, public router: Router,
                private userService: UserService, private formBuilder: FormBuilder) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

    }

    ngOnInit() {
        this.userService.getUserList().subscribe((users: Array<User>) => {
            for (const u of users) {
                if (u.status === AppConfig.statuses.ACTIVE) {
                    this.userList.push(u);
                } else {
                    this.deletedUserList.push(u);
                }
            }
        });
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

    edit(id: number) {
        this.router.navigateByUrl('/user/profile/' + id);
    }

    delete(id: number, i: number) {
        this.userService.updateStatus(id, AppConfig.statuses.DELETED).subscribe((user) => {
            this.userList.splice(i, 1);
            this.deletedUserList.push(user);
        }, (response: Response) => {
            if (response.status !== 200) {
            }
        });
    }

    unDelete(id: number, i: number) {
        this.userService.updateStatus(id, AppConfig.statuses.ACTIVE).subscribe((user) => {
            this.deletedUserList.splice(i, 1);
            this.userList.push(user);
        }, (response: Response) => {
            if (response.status !== 200) {
            }
        });
    }

}
