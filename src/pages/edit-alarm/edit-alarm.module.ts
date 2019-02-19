import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAlarmPage } from './edit-alarm';

@NgModule({
  declarations: [
    EditAlarmPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAlarmPage),
  ],
})
export class EditAlarmPageModule {}
