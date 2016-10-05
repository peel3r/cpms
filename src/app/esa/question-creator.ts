import {
  Component,
  Output,
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
  template: `
    <div class="note-creator shadow-2">
      <form class="row" (ngSubmit)="onCreateQuestion()">
        <div>
        sgdgafd
</div>
        <input
          type="text"
          [(ngModel)]="newQuestion.title"
          name="newQuestionTitle"
          placeholder="Title"
          class="col-xs-10 title"

        >
        <input
          type="text"
          [(ngModel)]="newQuestion.value"
          name="newQuestionValue"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs" >
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})
export class QuestionCreator {
  @Output() createQuestion = new EventEmitter();
  newQuestion = {
    title: '',
    value: ''
  };

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


}
