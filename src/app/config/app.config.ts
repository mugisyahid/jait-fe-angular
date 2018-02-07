import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
    routes: {},
    endpoints: {
        api: {
            login: '/api/login',
            register: '/register',
            product: '/api/product'
        },
        admin: {
            user: '/admin/user',
            profile: '/profile',
            enableUser: '/enableUser'
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
