import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alarm } from '../../services/alarms-service';

/**
 * Generated class for the AlarmFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alarm-form',
  templateUrl: 'alarm-form.html'
})
export class AlarmFormComponent {

  @Input() alarm;
  @Output() onDone = new EventEmitter();

  constructor() {
  }

  done() {
    this.onDone.emit(this.alarm);
  }

}
