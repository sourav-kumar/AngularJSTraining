import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//for ng-model use its required


import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './randomquote.component';
import { CounterComponent } from './counter.component';
import {TempConvertPipe} from './TempConvert.pipe';
import {MyFirstDirective} from './demo1.directive';
import {RoundBorder} from './roundBorder.component';
import {HttpModule} from '@angular/http'; //Rest  api => http://jsonplaceholder.typicode.com/posts
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    CounterComponent,
    TempConvertPipe,
    MyFirstDirective,
    RoundBorder
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
