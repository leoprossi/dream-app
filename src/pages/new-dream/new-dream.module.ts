import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDreamPage } from './new-dream';

@NgModule({
  declarations: [
    NewDreamPage,
  ],
  imports: [
    IonicPageModule.forChild(NewDreamPage),
  ],
})
export class NewItemPageModule {}
