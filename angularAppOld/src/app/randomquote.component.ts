import {Component}  from '@angular/core';

@Component({
    selector : 'random-quote',
    template : `
    <style>
    .quote {
        background-color: #ffff00;
        text-transform: capitalize;
    }
    </style>
    <div>
    <h2> Random Quote Comp </h2>
    <p class="quote">{{quote.line}}--{{quote.author}}</p>
    </div>
    `// ,
    // styles:[
    //     `.quote {
    //         background-color: #ffff00;
    //     }
    //     `
    // ]
})
export class RandomQuoteComponent{
    quotes: Object[] =  [{
        "line": "Nine people cant make a bay in a month",
        "author": " Fred Brooks"
    },
    {
        "line": "with great power comes great responsibility",
        "author": "Uncle Ben"
    }];
    randomIndex: number = Math.floor(Math.random() * this.quotes.length);
    quote = this.quotes[this.randomIndex];
};