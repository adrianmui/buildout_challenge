import { Broker } from '../shared/broker.model';
import { BrokersService } from '../shared/brokers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  brokers: Broker[];

  constructor(private brokersService: BrokersService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    this.brokersService.loadBrokers()
      .subscribe(brokers => this.brokers = brokers);
  }
}
