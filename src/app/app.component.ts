import {Component, ViewEncapsulation} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {HomeComponent} from './home/home.component';

import './app.css';

@Component({
    selector: 'app',
    template: require('./app.html'),
    // styles: [require('./app.css')],
    encapsulation: ViewEncapsulation.None,
    directives: [HomeComponent]
})
export class AppComponent {
    pobj:any = {
        age: 10
    };

    constructor() {
    }

    click() {
        this.pobj = {age:50};
    }
    
    getData(params){
        console.log(params);
    }
}