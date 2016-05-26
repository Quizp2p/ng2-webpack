import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-home',
    template: require('./home.html'),
    styles: [require('./home.less')]
})
export class HomeComponent implements OnInit {
    constructor() {
        
    }

    ngOnInit() {
    }
}