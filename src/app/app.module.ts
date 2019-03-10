import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Library tu use two way data bindings
import { FormsModule } from '@angular/forms';

// Library to use google maps
import { AgmCoreModule } from '@agm/core';

// Library to use angular animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Libraries to import angular material
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUGqp0rugUGOLxr1Y5AKKjkCE2PJ5IP4A'
    }), MatListModule, MatToolbarModule, BrowserAnimationsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
