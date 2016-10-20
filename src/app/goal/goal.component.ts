import {Component} from '@angular/core';
import { AppState } from '../app.service';
import {GoalService} from '../services/goal.service'
import {Router} from "@angular/router";
import { XLarge } from './x-large';

@Component({
  selector: 'goal',
  styleUrls: ['./goal.style.css'],
  templateUrl: './goal.template.html',
  providers: [
    GoalService
  ],

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
    public router: Router

  ) {


    setTimeout(() => {
      this.toggle()
    },1500)
    this.goalService.getUserGoals(this.USER_ID)
      .subscribe(
        res => {this.goals =  res.reverse()})
  }


  toUserProfile(): void {
    this.router.navigate(['','users', this.USER_ID]);
  }

  onCreateGoal(goal) {
    this.goalService.createGoal(goal)
      .subscribe(goal => this.goals.push(goal));
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }

  ngOnInit(){
    console.log('hello `Goal` component');
    //this.title.getData().subscribe(data => this.data = data);

  }
  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
