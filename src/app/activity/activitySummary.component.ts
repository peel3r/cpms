import { Component, Input } from '@angular/core';

@Component({
  selector: 'activity-summary',

  templateUrl: './activitySummary.template.html',
})

export class ActivitySummary  {

  @Input() activities = []
  @Input() goals =[]
  USER_ID = window.localStorage.getItem('cpms_user_id')
  goalActivities = []
  constructor() {

  }

  ngOnInit() {
    this.goals.forEach((goal,index) => {
      this.goalActivities.push(this.activities.filter(( activity, i ) => activity.relatedGoal === this.goals[index].title))
      console.log('goal activities',this.goalActivities)
    })
  }


}
