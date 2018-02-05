import { Component } from '@angular/core';

@Component({
    selector: 'promise',
    template: `
    <h1>Promises Demo</h1>
    <p style="font-size: 150%">Result: <strong>{{result}}</strong></p>
    <p>Time: <strong>{{time}}</strong></p>
    <p>Error: <strong>{{error}}</strong></p>
    `
})
export class PromiseComponent{

    result: any;
    error: any;
    time: any;

    constructor(){
        const startTime = Date.now();
        this.add(5, 2)
            .then(result => this.add(result, 3))
            .then(result => this.add(result, 1))
            .then(result => this.result = result)
            .catch(error => this.error.error)
            .then(() => this.time = Date.now() - startTime);   
    }
    add(x:any, y:any) : Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = x + y;
                if(result >= 0) {
                    resolve(result);
                } else {
                    reject('Invalid value: ' + result);
                }
            }, 100);
        });
    }
}