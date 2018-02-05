import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div><h2>Pipe Demo</h2>
     <hr/>
     <span>{{location[0].country | uppercase }}</span><br/>
     <span>{{location[0].continent | lowercase }}</span>
	 </div>
    `
})
export class AppComponent { 
   
    location = [
        {country: 'India', continent: 'Asia'}
    ];
    constructor(){
        
    }
}
