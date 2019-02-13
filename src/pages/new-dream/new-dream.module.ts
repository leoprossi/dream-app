import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
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
