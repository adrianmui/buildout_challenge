import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrokerService } from './shared/';
import { PropertyService } from './shared/';


import { BrokersComponent } from './brokers/';
import { BrokersListComponent } from './brokers/brokers-list/';
import { PropertiesComponent } from './properties/';
import { PropertiesListComponent } from './properties/properties-list/';
import { SpacesComponent } from './spaces/';
import { PhotosComponent } from './shared/photos/';

@NgModule({
  declarations: [
    AppComponent,
    BrokersComponent,
    BrokersListComponent,
    PropertiesComponent,
    PropertiesListComponent,
    SpacesComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ BrokerService, PropertyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
