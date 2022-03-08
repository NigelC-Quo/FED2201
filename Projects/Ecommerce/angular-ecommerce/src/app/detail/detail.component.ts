import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  product: Products | undefined;

  constructor(
    private route: ActivatedRoute,
    private skateService: SkateService,
    private location: Location) { }

  ngOnInit(): void {

    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skateService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

}
