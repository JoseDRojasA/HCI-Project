import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RuteDetailsPage } from './rute-details';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    RuteDetailsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RuteDetailsPage),
  ],
})
export class RuteDetailsPageModule { }
