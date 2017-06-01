import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Broker } from './broker.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = `http://buildoutapi.us-west-2.elasticbeanstalk.com/api/brokers`;

@Injectable()
export class BrokerService {

  constructor(private http: Http) {
    console.log(this.constructor.name);
   }

   loadBrokers(): Observable<Broker[]> {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}
