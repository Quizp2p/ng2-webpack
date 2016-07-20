import {
    Component,
    OnInit,
    Optional
} from '@angular/core';

@Component({
    selector: 'my-notify',
    template: `<ul><li>notify</li><li *ngFor="let i of list">{{i}}</li></ul>`
})
export class NotifyComponent implements OnInit {
    list: Array<number> = [];

    setList(list) {
        this.list = [1, 2, 3];
    }

    constructor() {
    }

    ngOnInit() {

    }
}