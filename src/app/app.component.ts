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
      m_icon: 'person_pin',
      route: '/brokers'
    },
    {
      name: 'properties',
      m_icon: 'business',
      route: '/properties'
    },
    {
      name: 'spaces',
      m_icon: 'store',
      route: '/spaces'
    }
  ];



}
