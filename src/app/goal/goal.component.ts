import {
  Component,
  OnDestroy,
  trigger,
  style,
  animate,
  state,
  transition } from '@angular/core';
import { GoalService } from '../services/goal.service'
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import { Store } from "../store";
import 'rxjs/Rx'


@Component({
  selector: 'goal',
  styleUrls: ['./goal.style.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void => *', [
        animate(600, style({opacity: 1}))
      ]),
      transition('* => void', animate(1000))
    ])
  ],
  templateUrl: './goal.template.html',
})

export class Goal {
  goals = [];
  date = Date.now()
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true
  constructor(
    public goalService: GoalService,
    public router: Router,
    private store: Store
  ) {
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(res => {
        this.goals =  res
      })



    this.store.changes.pluck('goals')
      .subscribe();

    setTimeout(() => {
      this.toggle()
    },1000)
  }


  onCreateGoal(goal) {
    this.goalService.createGoal(goal)
      .subscribe(goal => {
        this.goals.push(goal)
      });
  }

  onGoalChecked(goal,i) {
    goal.done = true
    this.goalService.deleteGoal(goal)
      .subscribe();
    this.goals.splice(i, 1);

  }

  onBackGoalChecked(goal,i) {
    goal.done = false
    this.goalService.completeGoal(goal)
      .subscribe();
    this.goals.push(i, 1);

  }



  toggle() {
    this.onLeave = !this.onLeave;
  }

  toUserProfile(): void {
    this.router.navigate(['','users', this.USER_ID]);
  }

}
