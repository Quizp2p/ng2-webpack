import { Component } from '@angular/core';
import {
    REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators,
    FormBuilder
} from '@angular/forms';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AppComponent {
    title: 'csx';
    form: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            username: ['xxx']
        });

        //
        // this.form = new FormGroup({
        //     field: new FormControl('', Validators.required)
        // });
    }

    onSubmit(f) {
        console.log(f);
    }
}