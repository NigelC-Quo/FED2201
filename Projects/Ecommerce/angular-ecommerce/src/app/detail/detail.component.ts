import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent implements OnInit {
  product: Products | undefined;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    private route: ActivatedRoute,
    private skateService: SkateService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDBProductsID();
  }

  getDBProductsID(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skateService.getDBProducts().subscribe((response) => {
      this.product = response.find((prod) => prod.id === id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
