import {Component, Input, Output, SimpleChange ,EventEmitter} from '@angular/core';

import './home.css';

@Component({
    selector: 'my-home',
    template: require('./home.html'),
    // styles: [require('./home.css')]
})
export class HomeComponent {
    @Input() obj:string;

    @Output()
    fetch:EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges(changes:{[propKey:string]:SimpleChange}) {
        console.log(changes)
    }

    click(){
        this.fetch.emit({ff:23});
    }
}