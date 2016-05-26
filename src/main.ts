import {bootstrap}      from '@angular/platform-browser-dynamic';
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';
import {AppComponent}   from './app/app.component';
import './main.less';

bootstrap(AppComponent, [
    DIRECTIVES,
    PIPES,
    PROVIDERS,
    ENV_PROVIDERS
]).catch(err => console.error(err));
