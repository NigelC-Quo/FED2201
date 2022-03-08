import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  decks: Products[] = [];
  trucks: Products[] = [];
  wheels: Products[] = [];
 

  constructor(private skateService: SkateService) { }

  ngOnInit(): void {
    this.getDecks();
    this.getTrucks();
    this.getWheels();
  }

  getDecks(): void {
    this.skateService.getProducts("deck")
      .subscribe(decks => this.decks = decks.slice(1, 3));
  }

  getTrucks(): void {
    this.skateService.getProducts("trucks")
      .subscribe(trucks => this.trucks = trucks.slice(1, 3));
  }

  getWheels(): void {
    this.skateService.getProducts("wheels")
      .subscribe(wheels=> this.wheels = wheels.slice(1, 3));
  }

}
