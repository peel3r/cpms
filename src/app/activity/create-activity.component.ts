import {Component, Output, EventEmitter} from '@angular/core';
// import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Input} from "@angular/core";
import {GoalService} from "../services/goal.service";
import {Route} from "@angular/router";
import {Store} from "../store";

@Component({
  selector: 'create-activity',
  styleUrls: ['./activity.style.css'],
  templateUrl: './create-activity.template.html'

})

export class CreateActivity {
  goals = []

  @Output() createActivity = new EventEmitter();
  goalTypes = ['physical activity', 'mental activity', 'social activity'];
  USER_ID = window.localStorage.getItem('cpms_user_id')

  colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
  duration = [5,10,15,20,30,45,60,90,120]
  rating = [1,2,3,4,5,6,7,8,9,10]
  constructor(
    public goalService: GoalService,
    public router: Router,
    private store: Store
  ) {
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(res => {
        this.goals = res
      })
  }
  newActivity = {
    name: '',
    fatigue: 0,
    pain: 0,
    fog: 0,
    rating: 0,
    comments: '',
    relatedGoal: 0,
    color: 'white',
    duration: 0
  };
  fullForm: boolean = false;

  onCreateActivity() {
    const { name, fatigue, pain, fog, rating, comments, relatedGoal, color, duration } = this.newActivity;

    if (name) {
      this.createActivity.next({ name, fatigue, pain, fog, rating, comments, relatedGoal, color, duration });
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
      fatigue: 0,
      pain: 0,
      fog: 0,
      rating: 0,
      comments: '',
      relatedGoal: 0,
      color: 'white',
      duration: 0
    };
  }
}
