import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),     // ✅ PROVIDES ActivatedRoute
    provideHttpClient(withFetch()) // ✅ SSR safe HTTP
  ]
};
