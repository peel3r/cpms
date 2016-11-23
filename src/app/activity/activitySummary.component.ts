import { Component, Input } from '@angular/core';

@Component({
  selector: 'activity-summary',

  templateUrl: './activitySummary.template.html',
})

export class ActivitySummary  {

  @Input() activities = []
  @Input() goals =[]
  USER_ID = window.localStorage.getItem('cpms_user_id')

  constructor() {

  }

  ngOnInit() {

  }


}
