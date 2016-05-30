import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class MyHighlightDirective {
    defaultBgColor: string = 'none';

    @HostListener('mouseenter')
    onMouseenter() {
        this.elRef.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave')
    onMouseleave() {
        this.elRef.nativeElement.style.backgroundColor = this.defaultBgColor;
    }

    constructor(private elRef: ElementRef) {
        this.defaultBgColor = elRef.nativeElement.style.backgroundColor;
    }
}