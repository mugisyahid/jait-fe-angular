import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store.component';
import {StoreDetailComponent} from './store-detail/store-detail.component';
import {StoreCreateComponent} from './store-create/store-create.component';

const routes: Routes = [
    {
        path: '', component: StoreComponent,
        children: [
            {path: '', component: StoreDetailComponent},
            {path: 'create', component: StoreCreateComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {
}
