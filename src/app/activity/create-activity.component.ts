import {Component, Output, EventEmitter} from '@angular/core';
// import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Input} from "@angular/core";
import {ActivityService} from "../services/activity.service";
import {Route} from "@angular/router";
import {Store, ActivityList} from "../store";
import {GoalService} from "../services/goal.service";

@Component({
  selector: 'create-activity',
  styleUrls: ['./activity.style.css'],
  templateUrl: './create-activity.template.html'

})

export class CreateActivity {
  activities = []
  goals = []
  event: ActivityList;

  @Output() createActivity = new EventEmitter();
  USER_ID = window.localStorage.getItem('cpms_user_id')

  colors: Array<string> = ['#B19C09', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  duration = [5,10,15,20,30,45,60,90,120]
  rating = [1,2,3,4,5,6,7,8,9,10]
  constructor(
    public activityService: ActivityService,
    public goalService: GoalService,
    public router: Router,
    private store: Store
  ) {
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(res => {
        this.goals = res
      })
    this.activityService.getUserActivities(this.USER_ID)
      .subscribe(res => {
        this.activities = res
      })
  }
  relatedGoals = this.goals;

  newActivity = {
    name: '',
    fatigue: '',
    pain: '',
    fog: '',
    rating: '',
    comments: '',
    relatedGoal: '',
    color: 'white',
    duration: '',
    start: '',
    end: ''
  };
  fullForm: boolean = false;

  onCreateActivity() {
    const { name, fatigue, pain, fog, rating, comments, relatedGoal, color, duration, start, end } = this.newActivity;

    if (name) {
      this.createActivity.next({ name, fatigue, pain, fog, rating, comments, relatedGoal, color, duration , start, end});
    }
      this.reset();
      this.fullForm = false;

  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newActivity.color = color;
  }

  reset() {
    this.newActivity = {
      name: '',
      fatigue: '',
      pain: '',
      fog: '',
      rating: '',
      comments: '',
      relatedGoal: '',
      color: 'white',
      duration: '',
      start: '',
      end: ''
    };
  }
}

