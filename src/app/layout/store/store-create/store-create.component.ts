import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../../router.animations';
import {AuthGuard} from '../../../shared/guard/auth.guard';
import {Store} from '../shared/store.model';
import {StoreService} from '../shared/store.service';


@Component({
    selector: 'app-store-create',
    templateUrl: './store-create.component.html',
    styleUrls: ['./store-create.component.scss'],
    animations: [routerTransition()]
})
export class StoreCreateComponent {

    storeForm: FormGroup;
    error: string;

    constructor(private storeService: StoreService, private translate: TranslateService, public router: Router,
                private formBuilder: FormBuilder, private authGuard: AuthGuard) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.storeForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'description': ['', [Validators.required]]
        });
    }

    createStore(store: Store) {
        this.storeService.createStore(store).subscribe((res) => {
            this.router.navigateByUrl('/store');
        }, (response: Response) => {
            if (response.status !== 200) {
                this.error = 'Somethings error!';
            }
        });

    }


}
