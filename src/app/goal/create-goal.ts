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
  goals = []
  colors: Array<string> = [
    '#06CA85',
    '#0ACAC9',
    '#0DA7CA',
    '#097CCA',
    '#BB04CA',
    '#CA0AA4',
    'white'
  ];
  goalTypes = ['physical activity', 'mental activity', 'social activity'];
  duration = ['5','10','15','20','30','45','60','90','120']
  howOften = ['every day', 'every two days','twice a week', 'once a week', 'every fortnight'  ]
  days = ['Morning','Noon', 'Afternoon','Evening','Late Evening','Night']
  ratings = ['1','2','3','4','5','6','7','8','9','10']


  newGoal = {
    title: '',
    type: '',
    color: 'white',
    duration: '',
    howOften: '',
    when: '',
    comments: '',
    confidenceLevel: '',
    done: false
  };
  fullForm: boolean = false;

  onCreateGoal() {
    const { title, type, color, duration, howOften, when, comments, confidenceLevel, done } = this.newGoal;

    if (title) {
      this.createGoal.next({ title, type, color, duration, howOften, when, comments, confidenceLevel, done });
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
      type: '',
      color: 'white',
      duration: '',
      howOften: '',
      when: '',
      comments: '',
      confidenceLevel: '',
      done: false
    };
  }
}
