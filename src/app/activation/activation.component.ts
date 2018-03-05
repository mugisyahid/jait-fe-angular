import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthGuard} from '../shared/guard';
import {ActivationService} from './shared/activation.service';

@Component({
    selector: 'app-activation',
    templateUrl: './activation.component.html',
    styleUrls: ['./activation.component.scss'],
    // animations: [routerTransition()]
})
export class ActivationComponent implements OnInit {

    error: string;
    userName: string;
    token: string;

    constructor(private authGuard: AuthGuard, public router: Router, private route: ActivatedRoute,
                private activationService: ActivationService) {
        this.token = this.route.snapshot.params['token'];
        this.activationService.activate(this.token).subscribe(res => {
            if (res.name) { this.userName = res.name; }
            if (res.error) { this.error = res.error; }
        });
    }

    ngOnInit() {
    }
}
