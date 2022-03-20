import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkateService } from '../skate.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent implements OnInit {
  product: Products | undefined;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  closeResult = '';

  constructor(
    private route: ActivatedRoute,
    private skateService: SkateService,
    private location: Location,
    private modalService: NgbModal
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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addToCart(product: Products) {
    this.skateService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

