import {Component, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {GoalService} from "../services/goal.service";


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

  goals = []


  constructor(private route: ActivatedRoute,
              private router: Router,
              private goalService: GoalService
  ) {}




  powers = ['Aching','Sharp','Penetrating','Throbbing','Tender','Nagging','Shooting','Burning','Numb','Stabbing','Pinching','Gnaving'];

  @Output() createGoal = new EventEmitter();
  newGoal = {
    title: ''
  };

  onCreateGoal() {
    const {
      title
    } = this.newGoal;

    if (title) {

      this.createGoal.next({
        title
      });

      this.reset();
    }
  }

  reset() {

    this.newGoal = {
      title: ''
    };
  }
}
