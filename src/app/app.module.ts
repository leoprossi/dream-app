import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { DreamService } from '../shared/services/dream-service';
import { NewDreamPage } from '../pages/new-dream/new-dream';
import { AlarmsPage } from '../pages/alarms/alarms';
import { AlarmService } from '../shared/services/alarms-service';
import { NewAlarmPage } from '../pages/new-alarm/new-alarm';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    NewDreamPage,
    AlarmsPage,
    NewAlarmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'],
      dayShortNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    NewDreamPage,
    AlarmsPage,
    NewAlarmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DreamService,
    AlarmService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
