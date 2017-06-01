import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = `http://buildoutapi.us-west-2.elasticbeanstalk.com/api/properties`;

@Injectable()
export class PropertyService {

  constructor(private http: Http) {
    console.log(this.constructor.name);
   }

   loadProperties(): Observable<Response> {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}
