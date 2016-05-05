import {Component, ViewEncapsulation} from '@angular/core';
import {Http,HTTP_PROVIDERS} from '@angular/http';
import {HomeComponent} from './home/home.component';


@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    encapsulation: ViewEncapsulation.None,
    directives: [HomeComponent],
    providers:[HTTP_PROVIDERS]
})
export class AppComponent {
    constructor(private http:Http) {
    }

    ngOnInit() {
        this.http.get('https://cnodejs.org/api/v1/topics')
            .map(res => res.json())
            .subscribe((res)=> {
                console.log(res);
            })
    }
}