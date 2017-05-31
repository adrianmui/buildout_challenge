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

  constructor() {
    console.log(this.constructor.name);
  }

  ngOnInit() {
  }



}
