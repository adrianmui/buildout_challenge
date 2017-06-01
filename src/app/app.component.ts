import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buildout';
links = [
    {
      name: 'brokers',
      route: '/brokers'
    },
    {
      name: 'properties',
      route: '/properties'
    },
    {
      name: 'spaces',
      route: '/spaces'
    }
  ];



}
