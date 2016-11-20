import {
  Component,
  OnDestroy,
  trigger,
  style,
  animate,
  state,
  transition, Input } from '@angular/core';
import { ActivityService } from '../services'
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import {Store, ActivityList} from "../store";
import 'rxjs/Rx'
import {ChangeDetectorRef} from "@angular/core";
import {ActivityCard} from "./activity-card.component";


@Component({
  selector: 'activity',
  styleUrls: ['./activity.style.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void => *', [
        animate(600, style({opacity: 1}))
      ]),
      transition('* => void', animate(1000))
    ])
  ],
  templateUrl: './activity.template.html',
})

export class Activity {
  @Input() goals = []
  activities = [];
  events: any[];
  header: any;
  event: ActivityCard;
  dialogVisible: boolean = false;
  idGen: number = 100;

  date = Date.now()
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true
  constructor(
    public activityService: ActivityService,
    public router: Router,
    private store: Store,
    private cd: ChangeDetectorRef
  ) {
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe(res => {
        this.activities =  res

      })



    this.store.changes.pluck('activities')
      .subscribe();
    setTimeout(() => {
      this.toggle()
    },1000)
  }


  onCreateActivity(activity) {
    this.activityService.createActivity(activity)
      .subscribe(activity => {
        this.activities.push(activity)
      });
  }

  onActivityChecked(activity,i) {
    this.activityService.deleteActivity(activity)
      .subscribe();
    this.activities.splice(i, 1);


  }

  onBackActivityChecked(activity,i) {
    this.activityService.completeActivity(activity)
      .subscribe();

  }



  toggle() {
    this.onLeave = !this.onLeave;
  }

  toUserProfile(): void {
    this.router.navigate(['','users', this.USER_ID]);
  }







}

