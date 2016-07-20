import { bootstrap }      from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';
import { AppComponent }   from './app/app.component';
import './main.less';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
]).catch(err => console.error(err));