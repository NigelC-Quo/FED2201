import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { SkateService } from '../skate.service';
import { Product as Item } from '../classes/product';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.sass'],
})
export class DecksComponent implements OnInit {
  decks: Products[] = [];
  
  constructor(private skateService: SkateService) {}

  ngOnInit(): void {
    this.getDeckProductsDB();
  }

  getDeckProductsDB(): void {
    this.skateService.getDBProducts().subscribe((response) => {
      this.decks = response.filter(prod => prod.type === 'deck') 
      });
    };
  
}
