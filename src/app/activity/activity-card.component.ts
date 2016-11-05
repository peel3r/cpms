import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'activity-card',
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
  template: `

<div
      class="note-card row shadow-1"
            [ngStyle]="{'background-color': activity.color}"

      (mouseenter)="toggleCheck()"
      (mouseleave)="toggleCheck()"
    >
      <div class="icon" *ngIf="showCheck" (click)="onChecked()">
        <i class="material-icons">check</i>
      </div>
      <div class="col-xs-12 title">
        {{ activity.title }}
      </div>
      <div class="col-xs-12 value">
        Fatigue: {{ activity.fatigue }} <br> Pain: {{ activity.pain }} <br> Fog: {{ activity.fog }} <br> Duration: {{ activity.duration }} min
       <br> Over All Rating: {{activity.rating}} <br> Comments: {{activity.comments}} <br> Related Goal: {{activity.relatedGoal}} 
      </div>
    </div>
`
})

export class ActivityCard {

  @Input() activity = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  toggleCheck(){
    this.showCheck = !this.showCheck;
  }

  onChecked(activity) {
    this.checked.next(this.activity);
  }

}
