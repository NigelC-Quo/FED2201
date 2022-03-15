import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.sass']
})
export class WheelsComponent implements OnInit {
  
  wheels: Products[] = [];
  imagePath: string;

  constructor(private skateService: SkateService) {
    this.imagePath = "images/snack-deck.jpg"
   }

  ngOnInit(): void {
    this.getWheels()
  }

  getWheels(): void {
    this.skateService.getProducts("wheels").subscribe(wheels => this.wheels = wheels);
  }
}
