import {Component} from '@angular/core';
import {GoalService} from '../services/goal.service'

@Component({
  selector: 'new-goal',
  styleUrls: ['./goal.style.css'],
  template: `
    <create-goal (createDiary)="onCreateGoal($event)"></create-goal>
`
})

export class NewGoal {
  goals = [];

  constructor(private goalService: GoalService) {

  }

  onCreateGoal(goal) {
    this.goalService.createGoal(goal)
      .subscribe(goal => this.goals.push(goal));
  }

}
