import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.sass']
})
export class TrucksComponent implements OnInit {

  trucks: Products[] = [];

  selectedTrucks?: Products;

  constructor(private skateService: SkateService) { }

  ngOnInit(): void {
    this.getTrucks()
  }

  getTrucks(): void {
    this.skateService.getProducts("trucks").subscribe(trucks => this.trucks = trucks);
  }

}
