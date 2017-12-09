import { Database } from './../../app/database.class';
import { RutePreview } from './../../interfaces/rute-preview.class';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rutes: Array<RutePreview>;

  constructor(public navCtrl: NavController, private database: Database) {
    const rutes = this.database.rutes;
    this.rutes = new Array();
    for (const i in rutes) {
      this.rutes.push({
        title: rutes[i].name,
        stars: rutes[i].stars,
        image: rutes[i].image
      });
    }
  }

}
