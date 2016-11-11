import { Component } from '@angular/core';
import {DiaryService} from '../../services'
import {ActivityService} from "../../../services/activity.service";
import {GoalService} from "../../../services/goal.service";

@Component({
  selector: 'summary-chart',
  templateUrl: './bar-chart.template.html'
})
export class SummaryChartComponent {

  goals = []
  activities = []
  goalsLength = []
  activitiesLength = []
  dateCount = []
  user_id = window.localStorage.getItem('cpms_user_id')



  constructor( private activityService: ActivityService,
               private goalService: GoalService) {

  }

  ngOnInit() {
    this.goalService.getUserGoals(this.user_id)
      .map((goals) => {

        if (goals) {

          this.goals.push(goals)
          goals.forEach((goal) => {
              this.dateCount.push(goal.date.substring(5,10));

              this.goalsLength.push(goal.duration)
          }
          );
        }
        return this.goalsLength.duration;
      })

      .subscribe(res => this.goals = res)

    this.activityService.getUserActivities(this.user_id)
      .map((activities) => {

        if (activities) {

          this.activities.push(activities)
          activities.forEach((activity) => {
              this.activitiesLength.push(activity.duration)
            }
          );
        }
        return this.goalsLength.duration;
      })

      .subscribe(res => this.goals = res)
    setTimeout(() => {
      this.randomize()
    }, 1000);
  }



  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.dateCount;
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any = [
    {data: this.goalsLength, label: 'Goals'},
    {data: this.activitiesLength, label: 'Activities'},
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
    let data = this.goalsLength;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}

