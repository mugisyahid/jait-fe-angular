import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivationService} from './shared/activation.service';
import {AuthGuard} from '../shared/guard';
import {ActivationRoutingModule} from './activation-routing.module';
import {ActivationComponent} from './activation.component';

@NgModule({
    imports: [
        CommonModule,
        ActivationRoutingModule
    ],
    declarations: [ActivationComponent],
    providers: [ActivationService, AuthGuard]
})
export class ActivationModule {
}
