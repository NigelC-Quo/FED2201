import { Component, OnInit, Input } from '@angular/core';
import { Decks } from '../interfaces/decks';
import { Trucks } from '../interfaces/trucks';
import { Wheels } from '../interfaces/wheels';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  deck: Decks | undefined;
  truck: Trucks | undefined;
  wheel: Wheels | undefined;

  constructor(
    private route: ActivatedRoute,
    private skateService: SkateService,
    private location: Location) { }

  ngOnInit(): void {
    this.getDeck();
    this.getTruck();
    this.getWheel();
  }

  getDeck(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skateService.getDeck(id)
      .subscribe(deck => this.deck = deck);
  }

  getTruck(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skateService.getTruck(id)
      .subscribe(truck => this.truck = truck);
  }

  getWheel(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skateService.getWheel(id)
      .subscribe(wheel => this.wheel = wheel);
  }

  goBack(): void {
    this.location.back();
  }

}
