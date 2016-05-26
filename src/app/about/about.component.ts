import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-about',
    template: require('./about.html'),
    styles: [require('./about.less')]
})
export class AboutComponent implements OnInit {
    title: string = 'About Component';

    constructor() {

    }

    ngOnInit() {

    }
}