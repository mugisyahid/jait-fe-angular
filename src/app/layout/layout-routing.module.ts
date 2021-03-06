import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {path: 'product', loadChildren: './product/product.module#ProductModule'},
            {path: 'store', loadChildren: './store/store.module#StoreModule'},
            {path: 'user', loadChildren: './user/user.module#UserModule'},

            // example
            {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
            {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
            {path: 'forms', loadChildren: './form/form.module#FormModule'},
            {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
            {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
            {path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule'},
            {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
