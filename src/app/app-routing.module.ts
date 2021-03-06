import { NgModule } from '@angular/core';
import { BrokersComponent } from './brokers/';
import { PropertiesComponent } from './properties/';
import { PropertiesDescriptionComponent } from './properties/properties-description/';
import { SpacesComponent } from './spaces/';


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

  {
    path: 'properties',
    component: PropertiesComponent,
    children: [
      {
        path: '',
        component: PropertiesComponent
      },
      {
        path: ':id',
        children: [
          {
          path: 'description',
          component: PropertiesDescriptionComponent
          }
        ]

      }
    ]

  },

  {
    path: 'spaces',
    component: SpacesComponent
  },
  { path: '**',
    redirectTo: '/brokers',
    pathMatch: 'full'
  }
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
