import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {
    url: string = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http){
    }

    getPosts() {
        return this.http.get(this.url)
        .map((responseData) => {
            return responseData.json()
        })
        
    }



}