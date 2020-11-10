import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BaseComponent } from './base/base.component';
import { ShakyComponent } from './shaky/shaky.component';
import { WobblyComponent } from './wobbly/wobbly.component';
import { StartwobComponent } from './startwob/startwob.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BaseComponent, ShakyComponent, WobblyComponent, StartwobComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
