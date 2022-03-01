import { Component, OnInit, Input } from '@angular/core';
import { Decks } from '../interfaces/decks';
import { Trucks } from '../interfaces/trucks';
import { Wheels } from '../interfaces/wheels';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  @Input() deck?: Decks;
  @Input() truck?: Trucks;
  @Input() wheel?: Wheels;

  constructor() { }

  ngOnInit(): void {
  }

}
