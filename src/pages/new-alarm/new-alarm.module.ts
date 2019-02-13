import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAlarmPage } from './new-alarm';

@NgModule({
  declarations: [
    NewAlarmPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAlarmPage),
  ],
})
export class NewAlarmPageModule {}
