import { UserDetailsPage } from './../user-details/user-details';
import { HomePage } from './../home/home';
import { GlobalResources } from './../../app/global-resources.class';
import { Database } from './../../app/database.class';
import { User } from './../../interfaces/user.class';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-form',
  templateUrl: 'register-form.html',
})
export class RegisterFormPage {

  user: User;
  filled: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public database: Database,
    public globalResources: GlobalResources) {
    this.user = {
      user: undefined,
      password: undefined,
      name: undefined,
      lastName: undefined,
      picture: undefined,
      travelLevel: 1
    };
    this.filled = false;
  }
  ngAfterViewInit() {
    if (this.globalResources.user !== undefined) {
      this.navCtrl.setRoot(UserDetailsPage);
    }
  }
  public checkUser() {
    this.filled = this.user.lastName !== undefined &&
      this.user.lastName.length !== 0 &&
      this.user.name !== undefined &&
      this.user.name.length !== 0 &&
      this.user.password !== undefined &&
      this.user.password.length !== 0 &&
      this.user.user !== undefined &&
      this.user.user.length !== 0;
  }
  public saveUser() {
    this.database.users[this.user.user] = this.user.password;
    this.globalResources.user = this.user;
    this.navCtrl.setRoot(HomePage);
  }
}
