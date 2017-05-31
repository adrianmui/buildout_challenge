import { BrokersService } from './shared/brokers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrokersComponent } from './brokers/brokers.component';
import { BrokersListComponent } from './brokers/brokers-list/brokers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokersComponent,
    BrokersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ BrokersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
