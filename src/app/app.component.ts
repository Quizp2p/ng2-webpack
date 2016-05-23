import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    encapsulation: ViewEncapsulation.Native,
    directives: [HomeComponent]
})
export class AppComponent {

}