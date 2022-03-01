import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksComponent } from './decks/decks.component';
import { TrucksComponent } from './trucks/trucks.component';
import { WheelsComponent } from './wheels/wheels.component';


const routes: Routes = [
  { path: 'decks', component: DecksComponent },
  { path: 'trucks', component: TrucksComponent },
  { path: 'wheels', component: WheelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
