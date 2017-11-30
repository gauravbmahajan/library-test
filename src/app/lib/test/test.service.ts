import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TestService {

  constructor(private http:Http) { }

  getData():Observable<any>{
    return this.http.get("assets/announcement.json")
                    .map((data)=> {
                        setTimeout(()=> {
                            console.log(data);
                            return JSON.parse(data.text());
                        }, 1000);
                    })
  }

}
