import {Component, Input, EventEmitter, Output} from '@angular/core';
import {ActivityService} from "../services/activity.service";

@Component({
  selector: 'activity-summary-card',
  styles: [`
.note-card {
padding: 15px;
border-radius: 2px;
width: 100%;
position: relative;
margin-bottom: 20px;
}
.title {
font-size: 1.2rem;
font-weight: bold;
text-align: left;
color: rgba(0,0,0,0.8);
}
.value {
text-align: left;
font-size: 1.4rem;
font-weight: 200;
}
.icon {
position: absolute;
color: black;
border: 1px solid lightgrey;
background-color: white;
font-size: 30px;
top: -10px;
left: -10px;
width: 40px;
height: 40px;
border-radius: 100%;
cursor: pointer;
}
`],
  templateUrl: './activitySummary-card.template.html'
})

export class ActivitySummaryCard {
  @Input() goals = []
  @Input() goal = {};
  @Input() activities = [];
  @Output() checked = new EventEmitter();
  goalActivities = []
  showCheck: boolean = false;
  user_id = window.localStorage.getItem('cpms_user_id')
  goalActivityDurations = []
  relatedGoalActivityDurations = []
  allGoalsActivityRatings = []
  goalActivitiesDuration = []
  relatedGoalActivityRatings = []
  allGoalsActivityDurations = []
  goalActivitiesRating = []
  overAllRating = []
  constructor(public activityService: ActivityService){

  }

  ngOnInit() {
    this.activityService.getUserActivities(this.user_id)
      .map(activities => {
        console.log('goal activities', activities)
        this.goals.forEach((goal, index) => {

          return this.goalActivities.push(this.activities.filter((activity, i) => activity.relatedGoal === this.goals[index].title))

        })
        this.goalActivities.forEach((goalActivity, i) => {

          goalActivity.forEach((duration, i) => {
            if (duration.rating) {
              this.overAllRating.push(+duration.rating)
            }
            this.goalActivitiesRating = this.overAllRating.reduce((prev, cur) => {

              this.relatedGoalActivityRatings = (prev + cur / this.overAllRating.length);
              return this.relatedGoalActivityRatings

            }, 0)


            this.goalActivityDurations.push(+duration.duration)
            this.goalActivitiesDuration = this.goalActivityDurations.reduce((prev, cur) => {

              this.relatedGoalActivityDurations = (prev + cur / this.goalActivityDurations.length);
              return this.relatedGoalActivityDurations

            }, 0)

          })
          this.allGoalsActivityRatings.push(this.relatedGoalActivityRatings)

          this.allGoalsActivityDurations.push(this.relatedGoalActivityDurations)
          this.relatedGoalActivityDurations = [0]
          this.goalActivityDurations = []

        })

      }).subscribe()

  }

  toggleCheck(){
    this.showCheck = !this.showCheck;
  }

  onChecked(goal) {
    this.checked.next(goal);
  }

}
