import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: '<div>App Component {{list | json}}</div>'
})
export class AppComponent {
    list:string[] = ['xxx', 'yyy'];
}