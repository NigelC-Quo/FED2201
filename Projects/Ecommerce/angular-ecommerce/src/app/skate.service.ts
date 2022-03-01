import { Injectable } from '@angular/core';
import { Decks } from './interfaces/decks';
import { DECKS } from './mock/mock-decks';
import { Trucks } from './interfaces/trucks';
import { TRUCKS } from './mock/mock-trucks';
import { Wheels } from './interfaces/wheels';
import { WHEELS } from './mock/mock-wheels';

@Injectable({
  providedIn: 'root'
})
export class SkateService {

  constructor() { }

  getDecks(): Decks[] {
    return DECKS;
  }

  getTrucks(): Trucks[] {
    return TRUCKS;
  }

  getWheels(): Wheels[] {
    return WHEELS;
  }
}
