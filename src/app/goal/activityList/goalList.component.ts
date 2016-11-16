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
    let index: number = this.findEventIndexById(goal._id);
    this.goals.splice(index, 1);

    this.goalService.deleteGoal(goal)
      .subscribe()

    this.displayDialog = false;

  }

  findEventIndexById(id: number) {
    let index = -1;
    for(let i = 0; i < this.goals.length; i++) {
      if(id == this.goals[i]._id) {
        index = i;
        break;
      }
    }

    return index;
  }


  closeDialog() {
    this.displayDialog = false;

  }

  onDialogHide() {
    this.selectedGoal = null;
  }



  // saveGoal(goal,i) {
  //   console.log(goal)
  //
  //   //update
  //   if(goal) {
  //     console.log(goal)
  //     this.goalService.completeGoal(goal)
  //       .subscribe();
  //   }
  //
  //   this.displayDialog = false;
  // }
}

