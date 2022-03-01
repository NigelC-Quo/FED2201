import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecksComponent } from './decks/decks.component';
import { TrucksComponent } from './trucks/trucks.component';
import { WheelsComponent } from './wheels/wheels.component';

@NgModule({
  declarations: [
    AppComponent,
    DecksComponent,
    TrucksComponent,
    WheelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
