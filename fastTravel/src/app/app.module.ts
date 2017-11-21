import { UserDetailsPage } from './../pages/user-details/user-details';
import { GlobalResources } from './global-resources.class';
import { RegisterFormPage } from './../pages/register-form/register-form';
import { ActivityDetailsPage } from './../pages/activity-details/activity-details';
import { LoginPage } from './../pages/login/login';
import { Database } from './database.class';
import { RuteDetailsPage } from './../pages/rute-details/rute-details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComponentsModule } from './../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const pages = [
  MyApp,
  HomePage,
  ListPage,
  RuteDetailsPage,
  LoginPage,
  ActivityDetailsPage,
  RegisterFormPage,
  UserDetailsPage
];

@NgModule({
  declarations: pages,
  entryComponents: pages,
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    Database,
    GlobalResources,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
