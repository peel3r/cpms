import { Component, Input } from '@angular/core';
import {DiaryService} from '../../services'
import {ActivityService} from "../../../services/activity.service";
import {GoalService} from "../../../services/goal.service";
import {Observable} from 'rxjs/Rx';
import {NgZone} from "@angular/core";

@Component({
  selector: 'summary-chart',
  templateUrl: './bar-chart.template.html'
})
export class SummaryChartComponent {

  @Input() goals = []
  @Input() activities = []
  _activities = []
  dateCount = this.goals
  user_id = window.localStorage.getItem('cpms_user_id')
  relatedGoalActivityRatings = []
  goalActivities = []
  goalActivitiesDuration = []
  goalActivitiesRating = []
  allGoalsActivityRatings = []
  overAllRating = []
  allGoalsActivityDurations = []
  goalDurations =[]
  relatedGoalActivityDurations = []
  goalActivityDurations = []
  constructor( private activityService: ActivityService,
               private goalService: GoalService,
               private zone:NgZone

  ) {

    setTimeout(() => {
      this.randomize()
    }, 1500);
  }

  ngOnInit() {

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    Observable.forkJoin(

      this.activityService.getUserActivities(this.user_id)

    ).map(data => {
      this.activities = data[0]

      this.goals.forEach((goal,index) => {
        this.goalDurations.push(+goal.duration)

        if(goal.title.length > 8) {
          this.dateCount.push(goal.title.substring(0,8));
        } else {
          this.dateCount.push(goal.title);

        }
        this.goalActivities.push(this.activities.filter(( activity, i ) => activity.relatedGoal === this.goals[index].title))
      })
      this.goalActivities.forEach((goalActivity,i) => {

          goalActivity.forEach((duration, i) => {
            if(duration.rating) {
              this.overAllRating.push(+duration.rating)
            }
            this.goalActivitiesRating = this.overAllRating.reduce((prev, cur) => {

              this.relatedGoalActivityRatings = (prev + cur/this.overAllRating.length);
              return this.relatedGoalActivityRatings

            },0)


            this.goalActivityDurations.push(+duration.duration)
            this.goalActivitiesDuration = this.goalActivityDurations.reduce((prev, cur) => {

              this.relatedGoalActivityDurations = (prev + cur/this.goalActivityDurations.length);
              return this.relatedGoalActivityDurations

            },0)

          })
        this.allGoalsActivityRatings.push(this.relatedGoalActivityRatings)

        this.allGoalsActivityDurations.push(this.relatedGoalActivityDurations)
        this.relatedGoalActivityDurations = [0]
        this.goalActivityDurations = []
      })
     }).subscribe( );

  }


  public randomize() {
    // Only Change 3 values
    let data = this.goalDurations;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any = [
    {data: this.goalDurations , label: 'Target'},
    {data: this.allGoalsActivityDurations, label: 'Achieved'},
    {data: this.allGoalsActivityRatings, label: 'Over All Rating'},
  ];



}

