import {Component, Input, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'goal-card',

  template: `
<div class="card-container row shadow-3">
<div class="col-xs-3">
{{goal.date | date:'dd/MMM/yyyy'}}  <br>  

<button
          md-raised-button
          [routerLink]="[goal._id]"
          class="shadow-1"
        >
          More

        </button>  

</div>
`
})

export class GoalCard {

  @Input() goal = {}
  user_name = window.localStorage.getItem('cpms_user_name')
  // showGoal: boolean = false;


  // toggle(){
  //   this.showGoal = !this.showGoal;
  // }

}
