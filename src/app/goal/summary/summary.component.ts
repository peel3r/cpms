/*
weekly goals mesures
weeklyGoalDuration


weekly activity mesures
weeklyActivityDuration

realised target in %
weeklyTarget = weeklyGoalDuration
achievedWeeklyTarget = weeklyActivityDuration / weeklyGoalDuration

 */

import { Component , ViewChild, Input} from '@angular/core';
import { Store } from '../../store';
import {GoalService} from "../../services/goal.service";
import {ActivityService} from "../../services/activity.service";

@Component({
  selector: 'summary',
  templateUrl: './summary.template.html'

})

export class Summary {
  @Input() goals = []
  @Input() activities = []

  goalsUpdated = []
  USER_ID = window.localStorage.getItem('cpms_user_id')
  data: any;

  constructor(
    private goalService: GoalService,
    private activityService: ActivityService,
    private store: Store
  ) {

  }
}

