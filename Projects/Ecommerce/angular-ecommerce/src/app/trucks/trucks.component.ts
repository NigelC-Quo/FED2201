import { Component, OnInit } from '@angular/core';
import { Trucks } from '../interfaces/trucks';
import { TRUCKS } from '../mock/mock-trucks';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.sass']
})
export class TrucksComponent implements OnInit {

  trucks = TRUCKS;

  selectedTrucks?: Trucks;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(trucks: Trucks): void {
    this.selectedTrucks = trucks;
  }

}
