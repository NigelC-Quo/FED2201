import { Injectable } from '@angular/core';
import { Decks } from './interfaces/decks';
import { DECKS } from './mock/mock-decks';
import { Trucks } from './interfaces/trucks';
import { TRUCKS } from './mock/mock-trucks';
import { Wheels } from './interfaces/wheels';
import { WHEELS } from './mock/mock-wheels';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkateService {

  constructor() { }

  getDecks(): Observable<Decks[]> {
    const heroes = of(DECKS);
    return heroes;
  }

  getDeck(id: number): Observable<Decks> {
    const deck = DECKS.find(h => h.id === id)!;
    return of(deck);
  }

  getTrucks(): Observable<Trucks[]> {
    const heroes = of(TRUCKS);
    return heroes;
  }

  getTruck(id: number): Observable<Trucks> {
    const truck = TRUCKS.find(h => h.id === id)!;
    return of(truck);
  }

  getWheels(): Observable<Wheels[]> {
    const heroes = of(WHEELS);
    return heroes;
  }

  getWheel(id: number): Observable<Wheels> {
    const wheel = WHEELS.find(h => h.id === id)!;
    return of(wheel);
  }
}
