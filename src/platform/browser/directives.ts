/*
 * These are globally available directives in any template
 */

// Angular2
import { PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

// Angular 2 Material 2
import { MATERIAL_DIRECTIVES } from './material';

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
    ROUTER_DIRECTIVES,
    MATERIAL_DIRECTIVES
];

export const DIRECTIVES = [
    {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES}
];