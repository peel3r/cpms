import {Component, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {EsaService} from "../services/esa";


@Component({
  selector: 'esa-creator',
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
  templateUrl: './esa-creator.template.html'

})

export class EsaCreator {

  esas = []


  constructor(private route: ActivatedRoute,
              private router: Router,
              private esaService: EsaService,

  ) {}





  @Output() createEsa = new EventEmitter();
  newEsa = {
    text: ''
  };

  onCreateEsa() {
    const {
      text
    } = this.newEsa;
console.log(this.newEsa)
    if (text) {

      this.createEsa.next({
        text,

      });

      this.reset();
    }
  }

  reset() {

    this.newEsa = {
      text: ''
    };
  }
}





// import {Component, Output, Input, EventEmitter} from '@angular/core';
// import {ActivatedRoute} from "@angular/router";
// import {Router} from "@angular/router";
// import {EsaService} from "../services/esa";
//
// @Component({
//   selector: 'question-creator',
//   styles: [`
//     .note-creator {
//       padding: 20px;
//       background-color: white;
//       border-radius: 3px;
//     }
//     .title {
//       font-weight: bold;
//       color: rgba(0,0,0,0.8);
//     }
//     .full {
//       height: 100px;
//     }
//   `],
//   templateUrl: './question.template.html'
// })
// export class QuestionCreator {
//   questions = []

  // questions = [
  //   {text: 'Mobilising unaided by another person with or without a walking stick, manual wheelchair or other aid if such aid is normally, or could reasonably be, worn or used. ', answers: [
  //     {id: 1, answerText: 'Cannot either (i) mobilise more than 50 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 50 meters within a reasonable timescale because of significant discomfort or exhaustion.', answerPoints: 15},
  //     {id: 2, answerText: 'Cannot mount or descend two steps unaided by another person even with the support of a handrail. ', answerPoints: 9},
  //     {id: 3, answerText: 'Cannot either (i) mobilise more than 100 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 100 meters within a reasonable timescale because of significant discomfort or exhaustion.', answerPoints: 9},
  //     {id: 4, answerText: 'Cannot either (i) mobilise more than 200 metres on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 200 meters within a reasonable timescale because of significant discomfort or exhaustion.', answerPoints: 6},
  //     {id: 5, answerText: 'None of the above apply. 0 points.', answerPoints: 0}
  //     ]}
  // ];


//   constructor(private route: ActivatedRoute,
//               private router: Router,
//               private esaService: EsaService) {}
//
//
//   @Output() createEsa = new EventEmitter();
//
//   newEsa = {
//     text: ''
//   }
//
//   onCreateEsa() {
//     const {
//       text
//
//     } = this.newEsa;
//
// console.log(this.newEsa)
//       this.createEsa.next({
//         text,
//
//       });
//       this.reset();
//
//   }
//   reset() {
//     this.newEsa = {
//       text: '',
//     };
//   }
// }
