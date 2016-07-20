import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FORM_DIRECTIVES } from '@angular/forms';


@Component({
    selector: 'my-about',
    template: require('./about.html'),
    styles: [require('./about.less')],
    directives: [FORM_DIRECTIVES]
})
export class AboutComponent implements OnInit {
    title: string;
    form: FormGroup;

    constructor() {

    }

    ngOnInit() {

    }
}