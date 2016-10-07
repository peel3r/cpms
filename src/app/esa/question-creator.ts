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
  @Output() createAssessment = new EventEmitter();
  newQuestion = {
    title: '',
    value: ''
  };
  newAssessment ={
    question_1: ''
  }
  questions = [
    {text: 'Mobilising unaided by another person with or without a walking stick, manual wheelchair or other aid if such aid is normally, or could reasonably be, worn or used. ', answers: [
      {id: 1, answerText: 'Cannot either (i) mobilise more than 50 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 50 meters within a reasonable timescale because of significant discomfort or exhaustion.', answerPoints: 15},
      {id: 2, answerText: 'Cannot mount or descend two steps unaided by another person even with the support of a handrail. ', answerPoints: 9},
      {id: 3, answerText: 'Cannot either (i) mobilise more than 100 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 100 meters within a reasonable timescale because of significant discomfort or exhaustion.', answerPoints: 9},
      {id: 4, answerText: 'Cannot either (i) mobilise more than 200 metres on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 200 meters within a reasonable timescale because of significant discomfort or exhaustion.', answerPoints: 6},
      {id: 5, answerText: 'None of the above apply. 0 points.', answerPoints: 0}
      ]},


    {text: 'Don\'t forget to messsup', answers: [{id: 2, answerText: 'UJYTRTERE', answerPoints: 9}]},

  ];


  ngOnInit() {
    console.log(this.newAssessment.question_1)
  }


  // @Output() checked = new EventEmitter();
  // @Input() question = {};
  //
  // onCreateQuestion() {
  //   const { title, value } = this.newQuestion;
  //   if (title && value) {
  //     this.createQuestion.next({ title, value });
  //   }
  //
  //   this.reset();
  // }
  //
  //
  // reset() {
  //   this.newQuestion = {
  //     title: '',
  //     value: ''
  //   };
  // }
  // showCheck: boolean = true;
  //
  // toggleCheck() {
  //     this.showCheck = !this.showCheck
  // }
  //
  // onChecked() {
  //   this.checked.next(this.question);
  // }

}
