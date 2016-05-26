import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.less')],
    encapsulation: ViewEncapsulation.Native
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/about', name: 'About', component: AboutComponent}
])
export class AppComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }
}