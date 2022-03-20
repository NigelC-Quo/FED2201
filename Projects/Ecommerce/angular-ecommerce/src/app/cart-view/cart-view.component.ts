import { Component, OnInit } from '@angular/core';
import { SkateService } from '../skate.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.sass']
})
export class CartViewComponent implements OnInit {

  items = this.skateService.getItems();


  constructor(
    private skateService: SkateService,
  ) { }
  

  ngOnInit(): void {
  }

}
