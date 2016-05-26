import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {
    transform(value: string, args?: any): string {
        if (!value) return '';
        return value.toUpperCase();
    }
}