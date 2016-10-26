import {Component,OnDestroy,
  trigger,
  style,
  animate,
  state,
  transition} from '@angular/core';
import { AppState } from '../app.service';
import {GoalService} from '../services/goal.service'
import {Router} from "@angular/router";
import { XLarge } from './x-large';
import {Store} from "../store";

@Component({
  selector: 'goal',
  styleUrls: ['./goal.style.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void => *', [
        animate(600, style({opacity: 1}))
      ]),
      transition('* => void', animate(1000))
    ])
  ],
  templateUrl: './goal.template.html',
})

export class Goal {
  localState = { value: '' };
  goals = [];
  date = Date.now()
  USER_NAME = window.localStorage.getItem('cpms_user_name')
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true
  constructor(
    public appState: AppState,
    public goalService: GoalService,
    public router: Router,
    private store: Store
  ) {
    setTimeout(() => {
      this.toggle()
    },1500)
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(
        res => {this.goals =  res.reverse()});

    this.store.changes.pluck('goals')
      .subscribe((goals: any) =>  this.goals = goals);
  }


  toUserProfile(): void {
    this.router.navigate(['','users', this.USER_ID]);
  }

  onCreateGoal(goal) {
    this.goalService.createGoal(goal)
      .subscribe();
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }

  ngOnChange(){
    console.log('hello `Goal` component');
    //this.title.getData().subscribe(data => this.data = data);
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(
        res => {this.goals =  res.reverse()});

    this.store.changes.pluck('goals')
      .subscribe((goals: any) =>  this.goals = goals);
  }
  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  onGoalChecked(goal) {
    this.goalService.completeGoal(goal)
      .subscribe();
  }
}
