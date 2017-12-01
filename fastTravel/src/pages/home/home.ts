import { RutePreview } from './../../interfaces/rute-preview.class';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rutes: Array<RutePreview>;

  constructor(public navCtrl: NavController) {
    this.rutes = [
      {
        title: 'Chicamocha Extremo',
        stars: 5,
        image: 'route_1.png'
      },
      {
        title: 'San Gil Salvaje',
        stars: 5,
        image: 'route_2.png'
      },
      {
        title: 'San Gil Salvaje',
        stars: 5,
        image: 'route_3.png'
      }
    ];
  }

}
