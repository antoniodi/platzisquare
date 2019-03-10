import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Library tu use two way data bindings
import { FormsModule } from '@angular/forms';

// Library to use google maps
import { AgmCoreModule } from '@agm/core';

// Directive for count clicks
import { ContarClicksDirective } from '../app/directives/contar-clicks.directive';


@NgModule({
  declarations: [
    AppComponent, ContarClicksDirective
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUGqp0rugUGOLxr1Y5AKKjkCE2PJ5IP4A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
