import {Component, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'create-goal',
  styleUrls: ['./goal.style.css'],
  templateUrl: './create-goal.template.html'

})

export class CreateGoal {
  @Output() createGoal = new EventEmitter();

  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  goalTypes = ['physical activity', 'mental activity', 'social activity'];
  duration = [5,10,15,20,30,45,60,90,120]

  newGoal = {
    title: '',
    duration: 0,
    done: false,
    type: '',
    color: 'white'
  };
  fullForm: boolean = false;

  onCreateGoal() {
    const { title, duration, done, type, color } = this.newGoal;

    if (title) {
      this.createGoal.next({ title, duration, done, type, color });
    }
      this.reset();
      this.fullForm = false;

  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newGoal.color = color;
  }

  reset() {
    this.newGoal = {
      title: '',
      duration: 0,
      done: false,
      type: '',
      color: 'white'
    };
  }
}
