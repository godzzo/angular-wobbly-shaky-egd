import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startwob',
  templateUrl: './startwob.component.html',
  styleUrls: ['./startwob.component.scss']
})
export class StartwobComponent implements OnInit {
  isPlaying = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying);
  }

}
