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
  constructor( private activityService: ActivityService,
               private goalService: GoalService) {

  }

  ngOnInit() {


      // .subscribe(res => this.activities = res)

    this.goalService.getUserGoals(this.user_id)
      .map(goals => {
        this.goals = goals
      })
      .subscribe()

    this.activityService.getUserActivities(this.user_id)
      .map(activities => {
        this.activities = activities


        this.goals.forEach((goal,index) => {
          this.goalsS.push(+goal.duration)
          this.y.push(+goal.duration)
          this.goalActivities.push(this.activities.filter((activity,i) => activity.relatedGoal === this.goals[index].title))
  console.log('goal activities',this.goalActivities)

          //sums goal activities duration times

        })

        this.goalActivities.forEach((goalActivity, i) => {
          this.goalActivitiesDuration = goalActivity.reduce((prev,cur) => {

            this.x.push(+prev.duration + +cur.duration)
            console.log('cur',this.y)

            // console.log('....',+prev[i].duration + +cur[i].duration)

          })
        })
        console.log('goals',this.goalsS)

        // this.goals.forEach(goal => {
        //   // console.log('goal',goal)
        //   this.activities.forEach(activity => {
        //     if(goal.title === activity.relatedGoal) {
        //       this.goalActivities.push([activity,goal]
        //       )
        //
        //
        //       // console.log('goalactivities',this.goalActivities)
        //
        //     }
        //
        //     // for (var index = 0; index < this.goalActivities.length; index++){
        //     //   this.goalActivities[index]
        //     //   console.log(this.goalActivities[index][1])
        //     //
        //     // }
        //
        //   })
        //
        // })
        console.log(';',this.goalsS)
      })
      .subscribe()

    setTimeout(() => {

      // this.randomize()
    }, 1000);
  }



  // findEventIndexByRelatedGoal(title: string) {
  //   for (let i = 0; i < this.activities.length; i++) {
  //     if (title == this.activities[i].relatedGoal) {
  //       this.dailyActivities.push(this.activities[i].relatedGoal)
  //       break;
  //     }
  //   }
  // }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true

  };
  public barChartLabels:string[] = this.goalsS;
  public barChartType:string = 'line';
  public barChartLegend:boolean = true;

  public barChartData:any = [
    {data: [30,23], label: 'Goals'},
    {data: [45,11], label: 'Activities'},
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
    let data = this.x;
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
}

