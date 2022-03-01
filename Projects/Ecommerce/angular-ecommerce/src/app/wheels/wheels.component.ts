import { Component, OnInit } from '@angular/core';
import { Wheels } from '../interfaces/wheels';
import { WHEELS } from '../mock/mock-wheels';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.sass']
})
export class WheelsComponent implements OnInit {
  
  wheels: Wheels = {
    id: 1,
    name: 'Derby'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
