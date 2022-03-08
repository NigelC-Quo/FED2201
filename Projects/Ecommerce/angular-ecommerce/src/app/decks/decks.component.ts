import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.sass']
})
export class DecksComponent implements OnInit {

  decks: Products[] = [];

  constructor(private skateService: SkateService) { }

  ngOnInit(): void {
    this.getDecks();
  }

  getDecks(): void {
    this.skateService.getProducts("deck").subscribe(decks => this.decks = decks);
  }

}
