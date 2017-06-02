import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { PropertyService } from '../../shared/';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-properties-description',
  templateUrl: './properties-description.component.html',
  styleUrls: ['./properties-description.component.css']
})
export class PropertiesDescriptionComponent implements OnInit {
  property_id: number;
  property: any;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private propertyService: PropertyService,
               private cd: ChangeDetectorRef) {
    console.log(this.constructor.name);

    /** in the event of route change (but not parent route),
       we subscribe to the param change and forcefully ngInit
       so the GET call from propertyservice and retrigger the
       lifehooks, tldr ~refresh/reload~ the component class even
       though we're still in the same parent route.
       **/
    route.params.subscribe(params => this.ngOnInit());
    // router.events.subscribe(event => {
    //     if (event instanceof RoutesRecognized) {
    //       console.log('event: ', event);
    //         this.ngOnInit();
    //     }
    //   });
  }

  ngOnInit() {
    this.property_id = this.route.snapshot.params['id'];
    this.propertyService.getProperty(this.property_id)
      .subscribe(property => this.property = property);
  }
}
