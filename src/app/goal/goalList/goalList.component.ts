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
import {GoalList} from "../../store";

@Component({
  selector: 'goal-list',
  templateUrl: './goalList.template.html',
})

export class DataListDemo {
  USER_ID = window.localStorage.getItem('cpms_user_id')
  @Input() goals = [];
  selectedGoal: MyEvent;
  updatedGoals = []
  event: MyEvent;
  goal = {}
  displayDialog: boolean;
  goalTypes = ['physical activity', 'mental activity', 'social activity'];
  duration = ['5','10','15','20','30','45','60','90','120']
  howOften = ['every day', 'every two days','twice a week', 'once a week', 'every fortnight'  ]
  days = ['Morning','Noon', 'Afternoon','Evening','Late Evening','Night']
  ratings = ['1','2','3','4','5','6','7','8','9','10']

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

  saveEvent() {
    this.goalService.completeGoal(this.selectedGoal)
          .subscribe();
    this.displayDialog = false;
  }

  closeDialog() {
    this.displayDialog = false;
  }

  onDialogHide() {
    this.selectedGoal = null;
  }
}

export class MyEvent {
  title: string
  type: string
  color?: string
  duration?: string
  howOften?: string
  when?: string
  comments?: string
  confidenceLevel?: string
  done: boolean
  _id?: number
  createdAt?: string
  updatedAt?: string
  userId?: string
}
