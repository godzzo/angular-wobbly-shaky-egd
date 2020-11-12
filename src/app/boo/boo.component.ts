import { AfterViewInit, Component, OnInit } from '@angular/core';
import { flippingAnimation, fuseAnimations, shakingAnimation } from '../animations';

@Component({
  selector: 'app-boo',
  templateUrl: './boo.component.html',
  styleUrls: ['./boo.component.css'],
  animations: [shakingAnimation, flippingAnimation],
})
export class BooComponent implements OnInit, AfterViewInit {
  flipping = false;
  shaking = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.state = 'ngAfterViewInit';
  }

}
