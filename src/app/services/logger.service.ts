import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor() {
        console.log('New LoggerService');
    }

    log(str: string) {
        console.log(`Logger: ${str}`);
    }
}