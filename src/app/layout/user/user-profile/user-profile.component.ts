import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthGuard} from '../../../shared/index';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../../router.animations';
import {Gender} from '../shared/gender.model';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    animations: [routerTransition()]
})
export class UserProfileComponent implements OnInit {
    id: number;
    user: User;
    userForm: FormGroup;
    error: String;
    selectedGender: Gender;
    genders = [
        new Gender('MALE', 'Male'),
        new Gender('FEMALE', 'Female')
    ];
    imageUrl: string;

    constructor(private authGuard: AuthGuard, private translate: TranslateService, private route: ActivatedRoute,
                private router: Router,
                private userService: UserService, private formBuilder: FormBuilder) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.userForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'username': ['', [Validators.required, Validators.email]],
            'gender': ['', []],
            'phone': ['', []],
            'about': ['', []]
            // 'password': ['', [Validators.required]]
        });

        this.id = this.route.snapshot.params['id'];

    }

    ngOnInit() {
        this.userService.getUserById(this.id).subscribe((user: User) => {
            this.user = user;
            this.imageUrl = environment.imageUrl + '/user/' + this.user.imageName;
            if (this.user.gender === 'MALE') {
                this.selectedGender = this.genders[0];
            } else {
                this.selectedGender = this.genders[1];
            }
        });
    }

    update(u: User) {
        this.userService.updateProfile(u).subscribe((user) => {
            this.user = user;
            this.error = 'Update success';
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'Update failed';
            }
        });
    }

}
