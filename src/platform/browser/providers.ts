/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
    HTTP_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const PROVIDERS = [
    APPLICATION_PROVIDERS
];