import {Component, Input, EventEmitter, Output} from '@angular/core';

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

  @Input() goal = {};
  @Input() activity = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  toggleCheck(){
    this.showCheck = !this.showCheck;
  }

  onChecked(goal) {
    this.checked.next(goal);
  }

}
