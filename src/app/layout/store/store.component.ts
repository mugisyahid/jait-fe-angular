import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss'],
    animations: [routerTransition()]
})
export class StoreComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
