import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/dreams/dream-details/dream-details';
import { ListPage } from '../pages/dreams/dream-list/dream-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { DreamService } from '../shared/services/dream-service';
import { NewDreamPage } from '../pages/dreams/new-dream/new-dream';
import { AlarmsPage } from '../pages/alarms/alarm-list/alarm-list';
import { AlarmService } from '../shared/services/alarms-service';
import { NewAlarmPage } from '../pages/alarms/new-alarm/new-alarm';
import { EditAlarmPage } from '../pages/alarms/edit-alarm/edit-alarm';
import { PopoverComponent } from '../shared/components/popover/popover';
import { AlarmFormComponent } from '../shared/components/alarm-form/alarm-form';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    NewDreamPage,
    AlarmsPage,
    NewAlarmPage,
    EditAlarmPage,
    PopoverComponent,
    AlarmFormComponent
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
    NewAlarmPage,
    EditAlarmPage,
    PopoverComponent,
    AlarmFormComponent
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
