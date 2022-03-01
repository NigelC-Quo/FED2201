import { Component, OnInit } from '@angular/core';
import { Decks } from '../interfaces/decks';
import { DECKS } from '../mock/mock-decks';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.sass']
})
export class DecksComponent implements OnInit {

  decks = DECKS;

  selectedDecks?: Decks;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(decks: Decks): void {
    this.selectedDecks = decks;
  }

}
