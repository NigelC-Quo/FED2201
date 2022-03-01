import { Component, OnInit } from '@angular/core';
import { Decks } from '../interfaces/decks';
import { Trucks } from '../interfaces/trucks';
import { Wheels } from '../interfaces/wheels';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  decks: Decks[] = [];
  trucks: Trucks[] = [];
  wheels: Wheels[] = [];

  constructor(private skateService: SkateService) { }

  ngOnInit(): void {
    this.getDecks();
    this.getTrucks();
    this.getWheels();
    
  }

  getDecks(): void {
    this.skateService.getDecks()
      .subscribe(decks => this.decks = decks.slice(1, 3));
  }

  getTrucks(): void {
    this.skateService.getTrucks()
      .subscribe(trucks => this.trucks = trucks.slice(1, 3));
  }

  getWheels(): void {
    this.skateService.getWheels()
      .subscribe(wheels=> this.wheels = wheels.slice(1, 3));
  }

}
