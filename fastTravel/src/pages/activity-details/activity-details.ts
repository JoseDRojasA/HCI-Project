import { Activity } from './../../interfaces/activity.class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html',
})
export class ActivityDetailsPage {
  activity: Activity;
  image: number;
  bueno: number;
  bonito: number;
  barato: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = this.navParams.get('activity');
    this.image = 0;
    this.changeImage();
  }
  changeImage() {
    /*
    setTimeout(() => {
      if (this.image < this.activity.images.length - 1) {
        this.image++;
      } else {
        this.image = 0;
      }
      console.log(this.image);
      this.changeImage();
    }, 2000);
    */
  }
}
