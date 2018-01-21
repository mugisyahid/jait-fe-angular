import { InjectionToken } from '@angular/core';

import { IAppConfig } from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
  },
  endpoints: {
    api: {
      login: '/api/login',
      register: '/register'
    },
    admin:{
      user: '/admin/user',
      profile: '/profile'
    }

  }
};
