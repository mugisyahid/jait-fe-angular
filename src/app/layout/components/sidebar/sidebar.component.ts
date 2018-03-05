import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {AuthGuard} from '../../../shared/guard';
import {AppConfig} from '../../../config/app.config';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    pushRightClass = 'push-right';
    name: string;

    constructor(private authGuard: AuthGuard, private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en', 'id']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        this.name = this.authGuard.getName();
    }

    toProfile() {
        this.router.navigateByUrl('/profile');
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        this.authGuard.logout();
    }

    isSysAdmin() {
        return this.authGuard.isUserRole(AppConfig.roles.sysadmin);
    }

    isAdmin() {
        return this.authGuard.isUserRole(AppConfig.roles.admin);
    }

    isCustomer() {
        return this.authGuard.isUserRole(AppConfig.roles.customer);
    }

}
