/*
weekly goals mesures
weeklyGoalDuration


weekly activity mesures
weeklyActivityDuration

realised target in %
weeklyTarget = weeklyGoalDuration
achievedWeeklyTarget = weeklyActivityDuration / weeklyGoalDuration

 */

import { Component , Input} from '@angular/core';
import { Store } from '../../store';
import {GoalService} from "../../services/goal.service";
import {ActivityService} from "../../services/activity.service";

@Component({
  selector: 'summary',
  templateUrl: './summary.template.html'

})

export class Summary {
  @Input() goals;
  goalsUpdated = []
  activities = []
  USER_ID = window.localStorage.getItem('cpms_user_id')
  data: any;

  constructor(
    private goalService: GoalService,
    private activityService: ActivityService,
    private store: Store
  ) {
  }




  ngOnInit() {
console.log(this.goals)
    this.data = {
      labels: ['Weekly Goals Target','Activities Duration'],
      datasets: [
        {

          data: [1,2],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
    }
    console.log('hello `Article` component');
    // this.title.getData().subscribe(data => this.data = data);
  }


}

