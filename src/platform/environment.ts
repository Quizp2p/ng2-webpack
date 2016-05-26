// Angular 2
import { enableProdMode } from '@angular/core';

// Environment Providers
let PROVIDERS = [];

if ('production' === process.env.ENV) {
    enableProdMode();

    PROVIDERS = [
        PROVIDERS
    ];

} else {
    PROVIDERS = [
        PROVIDERS
    ];

}

export const ENV_PROVIDERS = [
    PROVIDERS
];