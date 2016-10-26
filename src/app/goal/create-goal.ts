import {Component, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'create-goal',
  styles: [` 
  .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  templateUrl: './create-goal.template.html'

})

export class CreateGoal {
  @Output() createGoal = new EventEmitter();

  goalTypes = ['physical activity', 'mental activity', 'social activity'];

  newGoal = {
    title: '',
    duration: 0,
    done: false,
    type: ''
  };

  onCreateGoal() {
    const { title, duration, done, type } = this.newGoal;

    if (title) {
      this.createGoal.next({ title, duration, done, type });
    }
      this.reset();
   }

  reset() {
    this.newGoal = {
      title: '',
      duration: 0,
      done: false,
      type: ''
    };
  }
}
