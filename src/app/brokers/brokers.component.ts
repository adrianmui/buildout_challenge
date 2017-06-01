import { Broker } from '../shared/';
import { BrokerService } from '../shared/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  brokers: Broker[];

  constructor(private brokerService: BrokerService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    this.brokerService.loadBrokers()
      .subscribe(brokers => this.brokers = brokers);
  }
}
