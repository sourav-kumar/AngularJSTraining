import {Component} from '@angular/core';

@Component({
    selector: 'quote-header',
    template: `<h2 [style.backgroundColor]="isHeader ? 'yellow' : 'aqua'">Random Quote</h2>
    <img [src]="imageUrl" [width]="imgWidth" [height]="imgHeight"/>
    `
})

export class QuoteHeader{
    imageUrl: string = "./image01.jpg";
    imgWidth: number = 400;
    imgHeight: number = 300;
    isHeader: boolean = true;
    constructor(){

    }
	}