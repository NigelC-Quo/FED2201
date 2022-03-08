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

  constructor(private skateService: SkateService) { }

  ngOnInit(): void {
    this.getWheels()
  }

  getWheels(): void {
    this.skateService.getProducts("wheels").subscribe(wheels => this.wheels = wheels);
  }
}
