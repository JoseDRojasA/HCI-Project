import { GlobalResources } from './../../app/global-resources.class';
import { User } from './../../interfaces/user.class';
import { RegisterFormPage } from './../register-form/register-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User;
  filled: boolean;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public globalResources: GlobalResources) {
    this.user = {
      user: undefined,
      password: undefined,
      name: undefined,
      picture: undefined,
      lastName: undefined,
      travelLevel: undefined
    }
    this.filled = false;
  }
  public checkUser() {
    this.filled = this.user.user !== undefined &&
      this.user.user.length !== 0 &&
      this.user.password !== undefined &&
      this.user.password.length !== 0;

  }
  public goToRegister() {
    this.navCtrl.push(RegisterFormPage);
  }

}
