import { Injectable } from '@angular/core';

@Injectable()
export class PeopleData{
    private goodPeople =[
        {name: "Roger Federer", yearBorn:"1981"},
        {name: "N Modi", yearBorn:"1958"},
    ];
    getAllGoodPeople(){
        return this.goodPeople;
    }
}