import { User } from './../../interfaces/user.class';
import { GlobalResources } from './../../app/global-resources.class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  user: User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalResources: GlobalResources) {
    this.user = this.globalResources.user;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
