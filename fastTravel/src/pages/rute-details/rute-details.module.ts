import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RuteDetailsPage } from './rute-details';

@NgModule({
  declarations: [
    RuteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RuteDetailsPage),
  ],
})
export class RuteDetailsPageModule {}
