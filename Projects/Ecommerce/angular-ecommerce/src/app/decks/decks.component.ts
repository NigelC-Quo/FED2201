import { Component, OnInit } from '@angular/core';
import { Decks } from '../interfaces/decks';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.sass']
})
export class DecksComponent implements OnInit {

  decks: Decks[] = [];

  constructor(private skateService: SkateService) { }

  ngOnInit(): void {
    this.getDecks();
  }

  getDecks(): void {
    this.skateService.getDecks().subscribe(decks => this.decks = decks);
  }

}
