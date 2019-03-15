import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// App components
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';

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
import { ContactComponent } from './contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlacesService } from './services/places.service';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, PlacesComponent, ContactComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, MatInputModule, MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUGqp0rugUGOLxr1Y5AKKjkCE2PJ5IP4A'
    }), MatListModule, MatToolbarModule, BrowserAnimationsModule, MatButtonModule,
    MatIconModule, MatGridListModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
