import { Component } from '@angular/core';
import { Question } from './question.component';
@Component({
  selector: 'question-container',

  styles: [`
    .questions {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
      padding-left: 20px;
      padding-right: 20px;
    }
  `],
  template: `
    
      <div>
        <question-creator (createQuestion)="onCreateQuestion($event)"></question-creator>
      </div>
      <div class="questions col-xs-8">
        <div class="row between-xs">
          <question-card
            class="col-xs-4"
            [question]="question"
            *ngFor="let question of questions; let i = index"
            (checked)="onQuestionChecked($event, i)"
          >
          </question-card>
        </div>
      </div>

  `
})
export class Esa {
  questions = [
    {title: 'Chores', value: 'Don\'t forget to clean up', color: 'lighblue'},
    {title: 'Food', value: 'meal prep tonight please!', color: 'seagreen'},
    {title: 'Shipping Number', value: '#234654hhd88', color: 'pink'}
  ];

  onQuestionChecked(question, i) {
    this.questions.splice(i, 1);
  }
  onCreateQuestion(question) {
    this.questions.push(question);
  }
}
