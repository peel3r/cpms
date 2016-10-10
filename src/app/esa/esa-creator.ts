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
  showCheck1: boolean = true;
  showCheck2: boolean = true;
  showCheck3: boolean = true;
  showCheck4: boolean = true;
  showCheck5: boolean = true;
  showCheck6: boolean = true;
  showCheck7: boolean = true;
  showCheck8: boolean = true;
  showCheck9: boolean = true;
  showCheck10: boolean = true;
  showCheck11: boolean = true;
  showCheck12: boolean = true;
  showCheck13: boolean = true;
  showCheck14: boolean = true;
  showCheck15: boolean = true;
  showCheck16: boolean = true;
  showCheck17: boolean = true;
  showCheck18: boolean = true;
  showCheck19: boolean = true;
  showCheck20: boolean = true;
  showCheck22: boolean = true;
  showCheck23: boolean = true;

  toggleCheck1() { this.showCheck1 = !this.showCheck1 }
  toggleCheck2() { this.showCheck2 = !this.showCheck2 }
  toggleCheck3() { this.showCheck3 = !this.showCheck3 }
  toggleCheck4() { this.showCheck4 = !this.showCheck4 }
  toggleCheck5() { this.showCheck5 = !this.showCheck5 }
  toggleCheck6() { this.showCheck6 = !this.showCheck6 }
  toggleCheck7() { this.showCheck7 = !this.showCheck7 }
  toggleCheck8() { this.showCheck8 = !this.showCheck8 }
  toggleCheck9() { this.showCheck9 = !this.showCheck9 }

  favoriteAnswer_q_1: string = 'Autumn';
  favoriteAnswer_q_2: string = 'Autumn';
  favoriteAnswer_q_3: string = 'Autumn';
  favoriteAnswer_q_4: string = 'Autumn';
  favoriteAnswer_q_5: string = 'Autumn';
  favoriteAnswer_q_6: string = 'Autumn';
  favoriteAnswer_q_7: string = 'Autumn';
  favoriteAnswer_q_8: string = 'Autumn';
  favoriteAnswer_q_9: string = 'Autumn';
  favoriteAnswer_q_10: string = 'Autumn';
  favoriteAnswer_q_11: string = 'Autumn';
  favoriteAnswer_q_12: string = 'Autumn';
  favoriteAnswer_q_13: string = 'Autumn';
  favoriteAnswer_q_14: string = 'Autumn';
  favoriteAnswer_q_16: string = 'Autumn';
  favoriteAnswer_q_17: string = 'Autumn';
  favoriteAnswer_q_18: string = 'Autumn';
  favoriteAnswer_q_19: string = 'Autumn';
  favoriteAnswer_q_20: string = 'Autumn';
  favoriteAnswer_q_21: string = 'Autumn';



  answers_1_options = [
    'Cannot either (i) mobilise more than 50 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 50 meters within a reasonable timescale because of significant discomfort or exhaustion.',
    'Cannot mount or descend two steps unaided by another person even with the support of a handrail',
    'Cannot either (i) mobilise more than 100 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 100 meters within a reasonable timescale because of significant discomfort or exhaustion.',
    'Cannot either (i) mobilise more than 200 metres on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 200 meters within a reasonable timescale because of significant discomfort or exhaustion.',
    'None of the above apply'
  ];

  answers_2_options = [
    'Cannot move between one seated position and another seated position located next to one another without receiving physical assistance from another person.',
    'Cannot, for the majority of the time, remain at a work station, either: (i) standing unassisted by another person (even if free to move around) or; (ii) sitting (even in an adjustable chair); or (iii) a combination of (i) and (ii), for more than 30 minutes, before needing to move away in order to avoid significant discomfort or exhaustion.',
    'Cannot, for the majority of the time, remain at a work station, either: (i) standing unassisted by another person (even if free to move around) or; (ii) sitting (even in an adjustable chair); or (iii) a combination of (i) and (ii), for more than an hour, before needing to move away in order to avoid significant discomfort or exhaustion',
    'None of the above apply'
  ]
  answers_3_options = [
    'Cannot raise either arm as if to put something in the top pocket of a coat or jacket.',
    'Cannot raise either arm to top of head as if to put on a hat.',
    'Cannot raise either arm above head height as if to reach for something',
    'None of the above apply'
  ]

  answers_4_options = [
    'Cannot pick up and move a 0.5 litre carton full of liquid. ',
    'Cannot pick up and move a one litre carton full of liquid.',
    'Cannot transfer a light but bulky object such as an empty cardboard box.',
    'None of the above apply'
  ]

  answers_5_options = [
    'Cannot either: (i) press a button, such as a telephone keypad or; (ii) turn the pages of a book with either hand. ',
    'Cannot pick up a £1 coin or equivalent with either hand. 15 points.',
    'Cannot use a pen or pencil to make a meaningful mark.',
    'Cannot single-handedly use a suitable keyboard or mouse. ',
    'None of the above apply'
  ]

  answers_6_options = [
    'Cannot convey a simple message, such as the presence of a hazard.',
    'Has significant difficulty conveying a simple message to strangers',
    'Has some difficulty conveying a simple message to strangers.',
    'None of the above apply'
  ]

  answers_7_options = [
    'Cannot understand a simple message due to sensory impairment, such as the location of a fire escape.',
    'Has significant difficulty understanding a simple message from a stranger due to sensory impairment.',
    'Has some difficulty understanding a simple message from a stranger due to sensory impairment.',
    'None of the above apply'
  ]

  answers_8_options = [
    'Unable to navigate around familiar surroundings, without being accompanied by another person, due to sensory impairment.',
    'Cannot safely complete a potentially hazardous task such as crossing the road, without being accompanied by another person, due to sensory impairment.',
    'Unable to navigate around unfamiliar surroundings, without being accompanied by another person, due to sensory impairment.',
    'None of the above apply'
  ]

  answers_9_options = [
    'At least once a month experiences (i) loss of control leading to extensive evacuation of the bowel and/or voiding of the bladder; or (ii) substantial leakage of the contents of a collecting device; sufficient to require cleaning and a change in clothing.',
    'The majority of the time is at risk of loss of control leading to extensive evacuation of the bowel and/or voiding of the bladder, sufficient to require cleaning and a change in clothing, if not able to reach a toilet quickly',
    'None of the above apply'
  ]

  answers_10_options = [
    'At least once a week, has an involuntary episode of lost or altered consciousness resulting in significantly disrupted awareness or concentration. ',
    'At least once a month, has an involuntary episode of lost or altered consciousness resulting in significantly disrupted awareness or concentration. ',
    'None of the above apply'
  ]
  constructor(private route: ActivatedRoute,
              private router: Router,
              private esaService: EsaService,

  ) {}





  @Output() createEsa = new EventEmitter();
  newEsa = {
    text: ''
  };

  onCreateEsa() {
    console.log(this.favoriteAnswer_q_1)
    console.log(this.favoriteAnswer_q_2)

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
