import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
    routes: {},
    endpoints: {
        api: {
            login: '/api/login',
            register: '/register',
            product: '/admin/product' // secured it
        },
        admin: {
            // user
            user: '/admin/user',
            profile: '/profile',
            enableUser: '/enableUser',
            // store
            store: '/admin/store'
        },
        updateImage: '/updateImage'
    },
    roles: {
        sysadmin: 'ROLE_SYSTEM',
        admin: 'ROLE_SYSTEM',
        customer: 'ROLE_CUSTOMER'
    },
    statuses: {
        ACTIVE: 'ACTIVE',
        DELETED: 'DELETED'
    }
};
