import {
  Component,
  Output,
Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'question-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  templateUrl: './question.template.html'
})
export class QuestionCreator {
  @Output() createQuestion = new EventEmitter();
  newQuestion = {
    title: '',
    value: ''
  };

  @Output() checked = new EventEmitter();
  @Input() question = {};

  onCreateQuestion() {
    const { title, value } = this.newQuestion;
console.log(this.newQuestion)
    if (title && value) {
      this.createQuestion.next({ title, value });
    }

    this.reset();
  }

  reset() {
    this.newQuestion = {
      title: '',
      value: ''
    };
  }
  showCheck: boolean = true;

  toggleCheck() {

      this.showCheck = !this.showCheck

  }

  onChecked() {
    this.checked.next(this.question);
  }

}
