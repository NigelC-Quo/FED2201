import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksComponent } from './decks/decks.component';
import { TrucksComponent } from './trucks/trucks.component';
import { WheelsComponent } from './wheels/wheels.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'decks', component: DecksComponent },
  { path: 'trucks', component: TrucksComponent },
  { path: 'wheels', component: WheelsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'cart', component: CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
