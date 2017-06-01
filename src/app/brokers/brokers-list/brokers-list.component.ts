import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Broker } from './../../shared';

@Component({
  selector: 'app-brokers-list',
  templateUrl: './brokers-list.component.html',
  styleUrls: ['./brokers-list.component.css']
})
export class BrokersListComponent implements OnInit {

  @Input() broker: Broker;

  constructor(private router: Router) {
    console.log(this.constructor.name);
  }


  routeToBrokerProperties(broker_id) {
    this.router.navigate(['/brokers', broker_id, 'properties'], );
  }

  ngOnInit() {

  }



}
