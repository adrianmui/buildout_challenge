import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrokersComponent } from './brokers/';
import { BrokersListComponent } from './brokers/brokers-list/';

import { BrokerService } from './shared/';
import { PropertyService } from './shared/';
import { PropertiesComponent } from './properties/';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokersComponent,
    BrokersListComponent,
    PropertiesComponent,
    PropertiesListComponent
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
