import { ActivityDetailsPage } from './../activity-details/activity-details';
import { Activity } from './../../interfaces/activity.class';
import { Rute } from './../../interfaces/rute.class';
import { Database } from './../../app/database.class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rute-details',
  templateUrl: 'rute-details.html',
})
export class RuteDetailsPage {
  private rute: Rute;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private database: Database) {
    this.rute = this.database.rutes[this.navParams.get('rute').title];
  }

  public viewActivityDetail(activity: Activity, event: any) {
    if (event.deltaX < 0) {
      this.navCtrl.push(ActivityDetailsPage, {
        'activity': activity
      });
    }
  }
}
