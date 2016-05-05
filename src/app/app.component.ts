import {Component, ViewEncapsulation} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    encapsulation: ViewEncapsulation.None,
    directives:[HomeComponent]
})
export class AppComponent {
    list:string[] = ['xxx', 'yyy', 'zzz'];
}