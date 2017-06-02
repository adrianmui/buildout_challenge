import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  @Input() property;

  constructor(private router: Router) {
    console.log(this.constructor.name);
   }

  ngOnInit() {
  }

  routeToPropertyDetails(property_id) {
    this.router.navigate(['/properties', property_id, 'description']);
  }

}
