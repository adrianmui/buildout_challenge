import { Router, ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core/core';
import { PropertyService } from '../shared/';
import { Component, OnInit } from '@angular/core';
import * as  _ from 'underscore';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit, AfterViewInit {

  broker_id: number;
  properties: any;

  constructor(private propertyService: PropertyService, private router: Router, private route: ActivatedRoute) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    // grab broker id from params if accessed through broker
    this.broker_id = this.route.snapshot.params['id'];

    // load property data filtered by broker or getall
    this.propertyService.loadProperties()
    .subscribe(properties => {
      if (this.broker_id) {
        this.properties = _.where(properties, {broker_id: this.broker_id });
      }
      this.properties = properties;
    });
  }

  ngAfterViewInit() {

  }

}
