import { AfterViewInit, Component, OnInit } from '@angular/core';
import { flippingAnimation, fuseAnimations, shakingAnimation } from '../animations';

@Component({
  selector: 'app-boo',
  templateUrl: './boo.component.html',
  styleUrls: ['./boo.component.css'],
  animations: [shakingAnimation, flippingAnimation, ...fuseAnimations],
})
export class BooComponent implements OnInit, AfterViewInit {
  flipping = false;
  shaking = false;
  slideInLeft = false;
  slideInBottom = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
