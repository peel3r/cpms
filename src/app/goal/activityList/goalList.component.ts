import {
  Component,
  OnDestroy,
OnInit,
Input, Output
} from '@angular/core';
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import { Store } from "../store";
import 'rxjs/Rx'
import {GoalService} from "../../services/goal.service";
import {Goal} from "../goal.component";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'goal-list',
  templateUrl: './goalList.template.html',
})

export class DataListDemo {
  USER_ID = window.localStorage.getItem('cpms_user_id')
  @Input() goals = [];
  selectedGoal: Goal;
  updatedGoals = []
  displayDialog: boolean;

  constructor(private goalService: GoalService) { }

  selectGoal(goal) {

    this.selectedGoal = goal;
    this.displayDialog = !this.displayDialog;
  }



  deleteGoal(goal,i) {
    console.log(goal)
    this.goals.splice(i, 1);

    this.goalService.deleteGoal(goal)
      .subscribe()
    // this.goalService.getUserGoals(this.USER_ID)
    //   .subscribe(res => {
    //     this.goals =  res.splice(i, 1);
    //   })
    this.displayDialog = !this.displayDialog;

  }

  onDialogHide() {
    this.selectedGoal = null;
  }

  saveGoal(goal,i) {
    //update
    if(goal) {
      console.log(goal)
      this.goalService.completeGoal(goal)
        .subscribe();
    }

    this.displayDialog = !this.displayDialog;
  }
}

