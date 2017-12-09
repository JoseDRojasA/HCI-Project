import { RuteDetailsPage } from './../../pages/rute-details/rute-details';

import { NavController } from 'ionic-angular';
import { RutePreview } from './../../interfaces/rute-preview.class';
import { Component, Input, OnChanges } from '@angular/core';

/**
 * Generated class for the RutePreviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rute-preview',
  templateUrl: 'rute-preview.html'
})
export class RutePreviewComponent implements OnChanges {

  @Input() rute: RutePreview;
  private stars: Array<number>;

  constructor(public navCtrl: NavController) {
    this.stars = new Array();
  }
  ngOnChanges() {
    for (let i = 0; i < this.rute.stars; i++) {
      this.stars.push(1);
    }
  }
  goToPage() {
    this.navCtrl.push(RuteDetailsPage, {
      'rute': this.rute
    });
  }
}
