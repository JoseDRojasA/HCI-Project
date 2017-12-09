import { UserDetailsPageModule } from './../pages/user-details/user-details.module';
import { RegisterFormPageModule } from './../pages/register-form/register-form.module';
import { ActivityDetailsPageModule } from './../pages/activity-details/activity-details.module';

import { GlobalResources } from './global-resources.class';
import { Database } from './database.class';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComponentsModule } from './../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { RuteDetailsPageModule } from '../pages/rute-details/rute-details.module';

const pages = [
  MyApp,
  HomePage,
  ListPage
];

@NgModule({
  declarations: pages,
  entryComponents: pages,
  imports: [
    BrowserModule,
    ComponentsModule,
    LoginPageModule,
    RegisterFormPageModule,
    RuteDetailsPageModule,
    ActivityDetailsPageModule,
    UserDetailsPageModule,
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
