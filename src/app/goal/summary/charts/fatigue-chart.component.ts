import { Component, Input } from '@angular/core';
import {DiaryService} from '../../services'
import {ActivityService} from "../../../services/activity.service";
import {GoalService} from "../../../services/goal.service";
import {Observable} from 'rxjs/Rx';
import {NgZone} from "@angular/core";

@Component({
  selector: 'fatigue-chart',
  templateUrl: './fatigue-chart.template.html'
})
export class FatigueChartComponent {

  @Input() goals = []
  @Input() activities = []

  dateCount = this.goals
  user_id = window.localStorage.getItem('cpms_user_id')

  goalActivities = []


  goalActivityPain =[]
  goalActivityFatigue =[]
  goalActivityFog =[]

  goalActivityDurations = []
  constructor( private activityService: ActivityService,
               private goalService: GoalService,
               private zone:NgZone

  ) {

    setTimeout(() => {
      this.randomize()
    }, 1000);
  }

  ngOnInit() {

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    Observable.forkJoin(

      this.activityService.getUserActivities(this.user_id)

    ).map(data => {
      this.activities = data[0]

      this.goals.forEach((goal,index) => {
        // this.dateCount.push(goal.type);

        this.goalActivities.push(this.activities.filter(( activity, i ) => activity.relatedGoal === this.goals[index].title))
      })
      this.goalActivities.forEach((goalActivity,i) => {
          goalActivity.forEach((activity, i) => {
            console.log('activity',activity)
            this.dateCount.push(activity.title);

            this.goalActivityFatigue.push(+activity.fatigue)
            this.goalActivityPain.push(+activity.pain)
            this.goalActivityFog.push(+activity.fog)


          })

      })
     }).subscribe( );

  }


  public randomize() {
    // Only Change 3 values
    let data = this.goalActivityPain;
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
    {data: this.goalActivityPain , label: 'Pain'},
    {data: this.goalActivityFatigue, label: 'Fatigue'},
    {data: this.goalActivityFog, label: 'Fog'},

  ];



}

