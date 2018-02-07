import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthGuard} from '../../../shared/index';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../../router.animations';
import {Gender} from '../shared/gender.model';
import {ImageService} from '../../shared/image.service';
import {AppConfig} from '../../../config/app.config';

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
    error: string;
    selectedGender: Gender;

    filename: string;
    filetype: string;
    value: string;

    isChangeImage: boolean;

    genders = [
        new Gender('MALE', 'Male'),
        new Gender('FEMALE', 'Female')
    ];
    imageUrl: string;

    constructor(private authGuard: AuthGuard, private translate: TranslateService, private route: ActivatedRoute,
                private router: Router, private imageService: ImageService,
                private userService: UserService, private formBuilder: FormBuilder) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.userForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            // 'username': ['', [Validators.required, Validators.email]],
            'gender': ['', []],
            'phone': ['', []],
            'about': ['', []]
            // 'password': ['', [Validators.required]]
        });

        this.id = this.route.snapshot.params['id'];
        this.filename = '';
        this.filetype = '';
        this.value = '';
        this.isChangeImage = false;

        this.userService.getUserById(this.id).subscribe((user: User) => {
            this.user = user;
            this.imageUrl = user.image[1];
            if (this.user.gender === 'MALE') {
                this.selectedGender = this.genders[0];
            } else {
                this.selectedGender = this.genders[1];
            }
        });
    }

    ngOnInit() {
    }

    update(u: User) {
        this.userService.updateProfile(u, this.id).subscribe((user) => {
            this.user = user;
            // update image
            if (this.isChangeImage) {
                this.isChangeImage = false;
                this.imageService.updateImage(AppConfig.endpoints.admin.user, this.id, this.filename, this.filetype, this.value)
                    .subscribe((response) => {
                        console.log(response);
                    });
            }
            this.error = 'Update success';
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'Update failed';
            }
        });
    }

    fileChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.isChangeImage = true;
                this.imageUrl = reader.result;
                this.filename = file.name;
                this.filetype = file.type;
                this.value = reader.result.split(',')[1];
            };
        }
    }

}
