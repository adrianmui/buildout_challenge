import { NgModule } from '@angular/core';
import { BrokersComponent } from './brokers/';
import { PropertiesComponent } from './properties/';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'brokers',
    children: [
      {
        path: '',
        component: BrokersComponent
      },
      {
        path: ':id',
        children: [
          {
            path: 'properties',
            component: PropertiesComponent
          }
        ]
      },
      { path: '**', redirectTo: '' }
    ]},

  { path: 'properties', component: PropertiesComponent },
  { path: '**', redirectTo: '/brokers', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
