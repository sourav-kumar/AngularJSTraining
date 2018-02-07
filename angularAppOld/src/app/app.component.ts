import { Component, OnInit } from '@angular/core';
import { PeopleData } from './peopleData.service';
import {PostsService} from './posts.service';
import {Posts} from './posts.model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1> {{title | uppercase}} </h1>
    <random-quote></random-quote>
    <hr/>
    <img [src]="imgUrl" [width]="imgWidth"  [height] ="imgHeight" />
    <hr/>
    <form>
      <input type="text" name="txt1" [(ngModel)]='title'><br/>
      <input type="button" (click)="changeTitle()" value=" Change Title"/>
    </form>
    <hr/>
    <CounterComponent [counter]="counterValue"
    (counterChanged)="handleCounterCHange($event)">
    </CounterComponent>
    <hr/>
    <hr/>
    <div style="font-size:40px;"> <strong>PIPES</strong></div>
    <p>{{123 | currency :'EUR' : true}}</p>
    <hr/>
    <p>{{today | date :'short'}}</p>
    <hr/>
    <p>{{today | date :'EEEE, MMMM d, yyyy'}}</p>
    <hr/>
    <p>{{['today','tomorrow','yesterday'] | slice:"1"}}</p>
    <hr/>
    <p>{{3.14159 | number:"1.1-2"}}</p>
    <hr/>
    <p>{{0.0159 | percent:"2.1-2"}}</p>
    <hr/>
    <p> custom pipe</p>
    <p>{{37 | TempConvert}}</p>
    <div style="font-size:40px;"> <strong> Directive</strong></div>
      <form>
        FirstName: <input type="text" name="txtFName" myFirstDirective/><br/>
        LastName: <input type="text" name="txtLName" myFirstDirective/>
      </form>
      <hr/>
    <div style="font-size:40px;"> <strong> ngIf Directive</strong></div>
    <div *ngIf="comments.length>0; else nocomments">
      <p> Comments...</p>
    </div>
    <ng-template #nocomments>
      <p> No Comments Yet !</p>
    </ng-template>
    <br/>
    <div style="font-size:40px;"> <strong> ngSwitch Directive</strong></div>
      <select [(ngModel)]='country' name="countryName">
        <option value="IN">INDIA</option>
        <option value="GB">Britain</option>
        <option selected value="MY">MALAYSIA</option>
      </select>
      <hr/>
    <div [ngSwitch]='country'>
      <h3 *ngSwitchCase="'IN'">Indian Rupee</h3>
      <h3 *ngSwitchCase="'GB'">Round Sterling</h3>
      <h3 *ngSwitchDefault>Malaysian Ringitt</h3>
    </div>
    <div style="font-size:40px;"> <strong> ngFor directive</strong></div>
    <div *ngFor="let person of people">
      <p> {{person.name}}</p>
    </div>
  <br/>
  <hr/>
    <div style="font-size:40px;"> <strong> Content Projection</strong></div>
    <roundBorder>this is a program</roundBorder>

    <br/>
    <hr/>
    <div style="font-size:40px;"> <strong> Forms</strong></div>
    <form #form="ngForm">
      FirstName: <input type="text" ngModel name="txtFName" required/><br/>
      LastName: <input type="text" ngModel name="txtLName" required/>
      <br/>
      <input type="button" [disabled]="!form.valid" (click)="log(form)" value="Submit"/>
      <hr/>
      <pre>
        {{form.value | json}}
      </pre>
      </form>
      <br/>
      <hr/>
     
    <div style="font-size:40px;"> <strong> SERVICES</strong></div>
    <p *ngFor="let person of objGoodPeople">
      {{person.name}}
    </p>
    <div style="font-size:40px;"> <strong>HTTP SERVICES</strong></div>
    <p *ngFor="let post of objPosts">
      {{post.title}}
    </p>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  providers:[PeopleData]
})
export class AppComponent implements OnInit{
  title = 'app';
  today = new Date();
  imgUrl:string ="../assets/Desert.jpg";
  imgHeight: number =200;
  imgWidth: number =200;
  changeTitle(){
    this.title = "New App Title";
  }
  counterValue: number = 5;
  handleCounterCHange(arg:Event){
    console.log(arg);
  }
  comments: string[] = ["2"];
  country: string = "IN";
  people = [
    {id:1,name:'user1'},
    {id:2,name:'user2'}
  ]
  log(form: any){
    console.log(form.valid);
    console.log(form.controls.txtFName.value);
  }
  objGoodPeople : Object;
  objPosts :Posts;
  constructor(private ppl: PeopleData, private ppl1: PostsService){

  }
  getPeople(): void {
    this.objGoodPeople = this.ppl.getAllGoodPeople();
  }
  getPost(): void {
    //promise way
    //this.ppl1.getPosts().then((posts)=> this.objPosts = posts);
    this.ppl1.getPosts().subscribe(
      (resp) =>this.objPosts = resp,(err)=>console.log(err)
    )

  }
  ngOnInit(){
    this.getPeople();
    this.getPost();
  }
}
