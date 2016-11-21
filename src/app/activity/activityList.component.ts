import {
  Component,
  OnDestroy,
  OnInit,
  Input, Output
} from '@angular/core';
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import 'rxjs/Rx'
import {EventEmitter} from "@angular/core";
import {ActivityService} from "../services/activity.service";
import {Store, ActivityList} from "../store";
// import {Activity} from "./activity.component";

@Component({
  selector: 'activity-table',
  templateUrl: './activityList.template.html',
})

export class ActivityTable {
  USER_ID = window.localStorage.getItem('cpms_user_id')

  displayDialog: boolean;

  activity: Activity = new PrimeActivity ();

  selectedActivity : Activity ;

  newActivity : boolean;

  activities: Activity [];


  constructor(private activityService: ActivityService) {
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe(res => this.activities = res )
    console.log(this.activity)
  }
  showDialogToAdd() {
    this.newActivity = true;
    this.activity = new PrimeActivity();
    this.displayDialog = true;
  }

  save() {
    if(this.newActivity)
      this.activities.push(this.activity);
    else
      this.activities[this.findSelectedActivityIndex()] = this.activity;

    this.activity = null;
    this.displayDialog = false;
  }

  delete() {
    this.activities.splice(this.findSelectedActivityIndex(), 1);
    this.activity = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newActivity = false;
    this.activity = this.cloneActivity(event.data);
    this.displayDialog = true;
  }

  cloneActivity(a: Activity): Activity {
    let activity = new PrimeActivity();
    for(let prop in a) {
      activity[prop] = a[prop];
    }
    return activity;
  }

  findSelectedActivityIndex(): number {
    return this.activities.indexOf(this.selectedActivity);
  }
}

class PrimeActivity implements Activity {

  constructor(  public fatigue?,
                public pain?,
                public fog?,
                public rating?,
                public comments?,
                public relatedGoal?,
                public color?,
                public duration?,
                public _id?,
                public createdAt?,
                public updatedAt?,
                public userId?,) {}
}

export interface Activity {
  fatigue?,
  pain?,
  fog?,
  rating?,
  comments?,
  relatedGoal?,
  color?,
  duration?,
  _id?,
  createdAt?,
  updatedAt?,
  userId?,
}
