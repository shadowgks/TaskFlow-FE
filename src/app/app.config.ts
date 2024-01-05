import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './modules/dashboard/pages/task/reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideStore(reducers, {metaReducers})]
};
