import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'goal-card',
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
      color: red;
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
  template: `


<div class="row shadow-1" 
     [ngStyle]="{'background-color': goal.color}"
     (mouseenter)="toggleCheck()"
     (mouseleave)="toggleCheck()">
     <div  *ngIf="showCheck" (click)="onChecked()">
        <i class="icon material-icons">delete_forever</i>
      </div>
    <div class="col-xs">
        <div class="box">
        {{ goal.title }}
        
        </div>
    </div>
    <div class="col-xs">
        <div class="box">
        {{ goal.type }} 
        
        </div>
    </div>
    <div class="col-xs">
        <div class="box">
        {{ goal.duration }} (min)

        </div>
    </div>
    <div class="col-xs">
        <div class="box">
        {{goal.confidenceLevel}}
        
        </div>
    </div>
    <div class="col-xs">
        <div class="box">
        {{goal.howOften}}
        
        </div>
    </div>
    <div class="col-xs">
        <div class="box">
        {{goal.when}}
        
        </div>
    </div>
    <div class="col-xs">
        <div class="box" style="font-size: 10px; font-style: oblique">
        {{goal.comments}}
        
        </div>
    </div>
</div>

`
})

export class GoalCard {

  @Input() goal = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  // user_name = window.localStorage.getItem('cpms_user_name')

  toggleCheck(){
    this.showCheck = !this.showCheck;
  }

  onChecked(goal) {
    this.checked.next(this.goal);
  }

}
