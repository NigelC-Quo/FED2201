import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  decks: Products[] = [];
  trucks: Products[] = [];
  wheels: Products[] = [];

  constructor(private skateService: SkateService) {}

  ngOnInit(): void {
    this.GetDeckProductsDB();
    this.getTruckProductsDB();
    this.getWheelProductsDB();
  }

  GetDeckProductsDB(): void {
    this.skateService.getDBProducts().subscribe((response) => {
      this.decks = response.filter((prod) => prod.type === 'deck').slice(1, 3);
    });
  }

  getTruckProductsDB(): void {
    this.skateService.getDBProducts().subscribe((response) => {
      this.trucks = response.filter((prod) => prod.type === 'trucks').slice(1, 3);
    });
  }

  getWheelProductsDB(): void {
    this.skateService.getDBProducts().subscribe((response) => {
      this.wheels = response.filter(prod => prod.type === 'wheels') .slice(1, 3);
      });
    };
}
