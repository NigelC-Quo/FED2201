import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecksComponent } from './decks/decks.component';
import { TrucksComponent } from './trucks/trucks.component';
import { WheelsComponent } from './wheels/wheels.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import { AboutPageComponent } from './about-page/about-page.component';
import { CartViewComponent } from './cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DecksComponent,
    TrucksComponent,
    WheelsComponent,
    DetailComponent,
    DashboardComponent,
    AboutPageComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
