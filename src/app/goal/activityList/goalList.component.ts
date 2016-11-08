import {
  Component,
  OnDestroy,
OnInit,
Input
} from '@angular/core';
import { Router } from "@angular/router";
import { XLarge } from './x-large';
import { Store } from "../store";
import 'rxjs/Rx'
import {GoalService} from "../../services/goal.service";
import {Goal} from "../goal.component";

@Component({
  selector: 'goal-list',
  templateUrl: './goalList.template.html',
})

export class DataListDemo {
  USER_ID = window.localStorage.getItem('cpms_user_id')
  @Input() goals = [];

  selectedGoal: Goal;

  displayDialog: boolean;

  constructor(private goalService: GoalService) { }

  selectGoal(goal: Goal) {

    this.selectedGoal = goal;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedGoal = null;
  }
}

// export interface Goal {
//   title;
//   color;
//   type;
//   comments;
// }
