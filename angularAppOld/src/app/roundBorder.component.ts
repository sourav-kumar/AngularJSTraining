import {Component} from '@angular/core'

@Component({
    selector: 'roundBorder',
    template:`
    <div style="border:2px solid black; border-radius: 4px; box-shadow: 4px 4px 4px #444">
        <h2>round bOrder Component</h2>
        <p><ng-content></ng-content></p>
    </div>
    `
})

export class RoundBorder{
    
}