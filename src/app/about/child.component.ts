import {
    Component,
    OnInit,
    Optional
} from '@angular/core';

import { AboutComponent } from './about.component';
import { NotifyComponent } from './notify.component';

@Component({
    selector: 'my-child',
    template: `child`
})
export class ChildComponent implements OnInit {
    constructor(@Optional() c: AboutComponent) {
        console.log(c);
    }

    ngOnInit() {

    }
}