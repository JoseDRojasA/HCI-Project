import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFormPage } from './register-form';

@NgModule({
  declarations: [
    RegisterFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFormPage),
  ],
})
export class RegisterFormPageModule {}
