import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'question-card',
  styles: [`
    .question-card {
      padding: 15px;
      border-radius: 2px;
      width: 100%;
      position: relative;
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
      class="question-card row shadow-1"
      [ngStyle]="{'background-color': question.color}"
      (mouseenter)="toggleCheck()"
      (mouseleave)="toggleCheck()"
    >
      <div class="icon" *ngIf="showCheck" (click)="onChecked()">
        <i class="material-icons">check</i>
      </div>
      <div class="col-xs-12 title">
        {{ question.title }}
      </div>
      <div class="col-xs-12 value">
        {{ question.value }}
      </div>
    </div>
  `
})
export class Question {
  @Input() question = {};
  @Output() checked = new EventEmitter();

  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.question);
  }
}
