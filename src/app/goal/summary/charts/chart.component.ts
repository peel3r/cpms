import { Component } from '@angular/core';
import {DiaryService} from '../../services'
import {ActivityService} from "../../../services/activity.service";
import {GoalService} from "../../../services/goal.service";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'summary-chart',
  templateUrl: './bar-chart.template.html'
})
export class SummaryChartComponent {

  goals = []
  goalsS = []

  activities = []
  goalsLength = []
  activitiesLength = []
  dateCount = []
  user_id = window.localStorage.getItem('cpms_user_id')

  dailyActivities = []


  goalActivities = []
  goalActivitiesDuration = []

  x = []
  y =[]
  z = []
  goalActivityDurations = []
  constructor( private activityService: ActivityService,
               private goalService: GoalService) {

  }

  ngOnInit() {
    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    Observable.forkJoin(
      this.goalService.getUserGoals(this.user_id),

      this.activityService.getUserActivities(this.user_id)

    ).map(data => {
      this.activities = data[1]
      this.goals = data[0]

      this.goals.forEach((goal,index) => {
        this.goalsS.push(+goal.duration)
        this.y.push(+goal.duration)
        console.log('goals duration',this.y)
        this.dateCount.push(goal.title);

        this.goalActivities.push(this.activities.filter(( activity, i ) => activity.relatedGoal === this.goals[index].title))
      })
        console.log('goal activities', this.goalActivities)
      this.goalActivities.forEach((goalActivity,i) => {
        console.log('goal activity', goalActivity)

          goalActivity.forEach((duration, i) => {



            this.goalActivityDurations.push(+duration.duration)
            console.log('durations',this.goalActivityDurations)
            this.goalActivitiesDuration = this.goalActivityDurations.reduce((prev, cur) => {

              this.z = (prev + cur);

              return this.z

            },0)

          })
        this.x.push(this.z)
        this.z = 0
        this.goalActivityDurations = []


        console.log('activity duration',this.x)

      })

    }).subscribe( );

  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any = [
    {data: this.y, label: 'Target'},
    {data: this.x, label: 'Achieved'},
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize() {
    // Only Change 3 values
    let data = this.y;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }


  // findEventIndexByRelatedGoal(title: string) {
  //   for (let i = 0; i < this.activities.length; i++) {
  //     if (title == this.activities[i].relatedGoal) {
  //       this.dailyActivities.push(this.activities[i].relatedGoal)
  //       break;
  //     }
  //   }
  // }


}

