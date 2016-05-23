import {Component, Input, Output, SimpleChange, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-home',
    template: require('./home.html'),
    styles: [require('./home.less')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}