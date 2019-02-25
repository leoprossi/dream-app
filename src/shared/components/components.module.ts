import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { AlarmFormComponent } from './alarm-form/alarm-form';

@NgModule({
	declarations: [
		PopoverComponent,
		AlarmFormComponent
	],
	imports: [],
	exports: [
		PopoverComponent,
		AlarmFormComponent
	]
})
export class ComponentsModule {}
