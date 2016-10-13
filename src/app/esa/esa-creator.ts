import {Component, Output, EventEmitter, HostListener} from '@angular/core';
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
  totalScore: number;

  questionScore_1: number;
  questionScore_2: number;
  questionScore_3: number;
  questionScore_4: number;
  questionScore_5: number;
  questionScore_6: number;
  questionScore_7: number;
  questionScore_8: number;
  questionScore_9: number;
  questionScore_10: number;
  questionScore_11: number;
  questionScore_12: number;
  questionScore_13: number;
  questionScore_14: number;
  questionScore_15: number;
  questionScore_16: number;
  questionScore_17: number;


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


  toggleCheck1() { this.showCheck1 = !this.showCheck1 }
  toggleCheck2() { this.showCheck2 = !this.showCheck2 }
  toggleCheck3() { this.showCheck3 = !this.showCheck3 }
  toggleCheck4() { this.showCheck4 = !this.showCheck4 }
  toggleCheck5() { this.showCheck5 = !this.showCheck5 }
  toggleCheck6() { this.showCheck6 = !this.showCheck6 }
  toggleCheck7() { this.showCheck7 = !this.showCheck7 }
  toggleCheck8() { this.showCheck8 = !this.showCheck8 }
  toggleCheck9() { this.showCheck9 = !this.showCheck9 }
  toggleCheck10() { this.showCheck10 = !this.showCheck10 }
  toggleCheck11() { this.showCheck11 = !this.showCheck11 }
  toggleCheck12() { this.showCheck12 = !this.showCheck12 }
  toggleCheck13() { this.showCheck13 = !this.showCheck13 }
  toggleCheck14() { this.showCheck14 = !this.showCheck14 }
  toggleCheck15() { this.showCheck15 = !this.showCheck15 }
  toggleCheck16() { this.showCheck16 = !this.showCheck16 }
  toggleCheck17() { this.showCheck17 = !this.showCheck17 }

  favoriteAnswer_q_1: string = 'None of the above apply';
  favoriteAnswer_q_2: string = 'None of the above apply';
  favoriteAnswer_q_3: string = 'None of the above apply';
  favoriteAnswer_q_4: string = 'None of the above apply';
  favoriteAnswer_q_5: string = 'None of the above apply';
  favoriteAnswer_q_6: string = 'None of the above apply';
  favoriteAnswer_q_7: string = 'None of the above apply';
  favoriteAnswer_q_8: string = 'None of the above apply';
  favoriteAnswer_q_9: string = 'None of the above apply';
  favoriteAnswer_q_10: string = 'None of the above apply';
  favoriteAnswer_q_11: string = 'None of the above apply';
  favoriteAnswer_q_12: string = 'None of the above apply';
  favoriteAnswer_q_13: string = 'None of the above apply';
  favoriteAnswer_q_14: string = 'None of the above apply';
  favoriteAnswer_q_15: string = 'None of the above apply';
  favoriteAnswer_q_16: string = 'None of the above apply';
  favoriteAnswer_q_17: string = 'None of the above apply';

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
  answers_11_options = [
    'Cannot learn how to complete a simple task, such as setting an alarm clock',
    'Cannot learn anything beyond a simple task, such as setting an alarm clock.',
    'Cannot learn anything beyond a moderately complex task, such as the steps involved in operating a washing machine to clean clothes.',
    'None of the above apply'
  ]
  answers_12_options = [
    'Reduced awareness of everyday hazards leads to a significant risk of: (i) injury to self or others; or (ii) damage to property or possessions, such that they require supervision for the majority of the time to maintain safety. ',
    'Reduced awareness of everyday hazards leads to a significant risk of (i) injury to self or others; or (ii) damage to property or possessions, such that they frequently require supervision to maintain safety.',
'Reduced awareness of everyday hazards leads to a significant risk of: (i) injury to self or others; or (ii) damage to property or possessions, such that they occasionally require supervision to maintain safety.',
    'None of the above apply'
  ]
  answers_13_options = [
    'Cannot, due to impaired mental function, reliably initiate or complete at least 2 sequential personal actions. ',
    'Cannot, due to impaired mental function, reliably initiate or complete at least 2 personal actions for the majority of the time.',
    'Frequently cannot, due to impaired mental function, reliably initiate or complete at least 2 personal actions.',
    'None of the above apply'
  ]
  answers_14_options = [
    'Cannot cope with any change to the extent that day to day life cannot be managed.',
    'Cannot cope with minor planned change (such as a pre-arranged change to the routine time scheduled for a lunch break), to the extent that overall day to day life is made significantly more difficult.',
    'Cannot cope with minor unplanned change (such as the timing of an appointment on the day it is due to occur), to the extent that overall, day to day life is made significantly more difficult.',
    'None of the above apply'
  ]
  answers_15_options = [
    'Cannot get to any place outside the claimant\'s home with which the claimant is familiar.',
    'Is unable to get to a specified place with which the claimant is familiar, without being accompanied by another person.',
    'Is unable to get to a specified place with which the claimant is unfamiliar without being accompanied by another person.',
    'None of the above apply'
  ]
  answers_16_options = [
    'Engagement in social contact is always precluded due to difficulty relating to others or significant distress experienced by the individual.',
    'Engagement in social contact with someone unfamiliar to the claimant is always precluded due to difficulty relating to others or significant distress experienced by the individual.',
    'Engagement in social contact with someone unfamiliar to the claimant is not possible for the majority of the time due to difficulty relating to others or significant distress experienced by the individual.',
    'None of the above apply'
  ]
  answers_17_options = [
    'Has, on a daily basis, uncontrollable episodes of aggressive or disinhibited behaviour that would be unreasonable in any workplace.',
    'Frequently has uncontrollable episodes of aggressive or disinhibited behaviour that would be unreasonable in any workplace.',
    'Occasionally has uncontrollable episodes of aggressive or disinhibited behaviour that would be unreasonable in any workplace.',
    'None of the above apply'
  ]


  constructor(private route: ActivatedRoute,
              private router: Router,
              private esaService: EsaService) {}

  @Output() createEsa = new EventEmitter();
  newEsa = {
    text: ''
  };

  ngDoCheck() {
    if (this.favoriteAnswer_q_1 === 'Cannot either (i) mobilise more than 50 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 50 meters within a reasonable timescale because of significant discomfort or exhaustion.') {
      this.questionScore_1 = 15
      this.totalScore = this.questionScore_1
    } else if (this.favoriteAnswer_q_1 === 'Cannot mount or descend two steps unaided by another person even with the support of a handrail'  ) {
      this.questionScore_1 = 9
    } else if (this.favoriteAnswer_q_1 ===  'Cannot either (i) mobilise more than 100 meters on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 100 meters within a reasonable timescale because of significant discomfort or exhaustion.') {
      this.questionScore_1 = 9
    } else if (this.favoriteAnswer_q_1 === 'Cannot either (i) mobilise more than 200 metres on level ground without stopping in order to avoid significant discomfort or exhaustion or (ii) repeatedly mobilise 200 meters within a reasonable timescale because of significant discomfort or exhaustion.' ) {
      this.questionScore_1 = 6
    } else  {
      this.questionScore_1 = 0
    }

    if (this.favoriteAnswer_q_2 === 'Cannot move between one seated position and another seated position located next to one another without receiving physical assistance from another person.') {
      this.questionScore_2 = 15
    } else if (this.favoriteAnswer_q_2 === 'Cannot, for the majority of the time, remain at a work station, either: (i) standing unassisted by another person (even if free to move around) or; (ii) sitting (even in an adjustable chair); or (iii) a combination of (i) and (ii), for more than 30 minutes, before needing to move away in order to avoid significant discomfort or exhaustion.' ) {
      this.questionScore_2 = 9
    } else if (this.favoriteAnswer_q_2 === 'Cannot, for the majority of the time, remain at a work station, either: (i) standing unassisted by another person (even if free to move around) or; (ii) sitting (even in an adjustable chair); or (iii) a combination of (i) and (ii), for more than an hour, before needing to move away in order to avoid significant discomfort or exhaustion' ) {
      this.questionScore_2 = 6
    } else  {
      this.questionScore_2 = 0
    }

    if (this.favoriteAnswer_q_3 === 'Cannot raise either arm as if to put something in the top pocket of a coat or jacket.') {
      this.questionScore_3 = 15
    } else if (this.favoriteAnswer_q_3 === 'Cannot raise either arm to top of head as if to put on a hat.' ) {
      this.questionScore_3 = 9
    } else if (this.favoriteAnswer_q_3 === 'Cannot raise either arm above head height as if to reach for something' ) {
      this.questionScore_3 = 6
    } else  {
      this.questionScore_3 = 0
    }

    if (this.favoriteAnswer_q_4 === 'Cannot pick up and move a 0.5 litre carton full of liquid. ') {
      this.questionScore_4 = 15
    } else if (this.favoriteAnswer_q_4 === 'Cannot pick up and move a one litre carton full of liquid.' ) {
      this.questionScore_4 = 9
    } else if (this.favoriteAnswer_q_4 === 'Cannot transfer a light but bulky object such as an empty cardboard box.' ) {
      this.questionScore_4 = 6
    } else  {
      this.questionScore_4 = 0
    }

    if (this.favoriteAnswer_q_5 ===     'Cannot either: (i) press a button, such as a telephone keypad or; (ii) turn the pages of a book with either hand. ') {
      this.questionScore_5 = 15
    } else if (this.favoriteAnswer_q_5 === 'Cannot pick up a £1 coin or equivalent with either hand. 15 points.' ) {
      this.questionScore_5 = 15
    } else if (this.favoriteAnswer_q_5 ===  'Cannot use a pen or pencil to make a meaningful mark.' ) {
      this.questionScore_5 = 9
    } else if (this.favoriteAnswer_q_5 ===  'Cannot single-handedly use a suitable keyboard or mouse. ') {
      this.questionScore_5 = 9
    } else  {
      this.questionScore_5 = 0
    }

    if (this.favoriteAnswer_q_6 ===  'Cannot convey a simple message, such as the presence of a hazard.') {
      this.questionScore_6 = 15
    } else if (this.favoriteAnswer_q_6 === 'Has significant difficulty conveying a simple message to strangers' ) {
      this.questionScore_6 = 15
    } else if (this.favoriteAnswer_q_6 ===  'Has some difficulty conveying a simple message to strangers.' ) {
      this.questionScore_6 = 6
    } else  {
      this.questionScore_6 = 0
    }

    if (this.favoriteAnswer_q_7 === 'Cannot understand a simple message due to sensory impairment, such as the location of a fire escape.') {
      this.questionScore_7 = 15
    } else if (this.favoriteAnswer_q_7 === 'Has significant difficulty understanding a simple message from a stranger due to sensory impairment.' ) {
      this.questionScore_7 = 15
    } else if (this.favoriteAnswer_q_7 ===  'Has some difficulty understanding a simple message from a stranger due to sensory impairment.' ) {
      this.questionScore_7 = 6
    } else  {
      this.questionScore_7 = 0
    }

    if (this.favoriteAnswer_q_8 === 'Unable to navigate around familiar surroundings, without being accompanied by another person, due to sensory impairment.') {
      this.questionScore_8 = 15
    } else if (this.favoriteAnswer_q_8 === 'Cannot safely complete a potentially hazardous task such as crossing the road, without being accompanied by another person, due to sensory impairment.' ) {
      this.questionScore_8 = 15
    } else if (this.favoriteAnswer_q_8 ===  'Unable to navigate around unfamiliar surroundings, without being accompanied by another person, due to sensory impairment.' ) {
      this.questionScore_8 = 9
    } else  {
      this.questionScore_8 = 0
    }

    if (this.favoriteAnswer_q_9 === 'At least once a month experiences (i) loss of control leading to extensive evacuation of the bowel and/or voiding of the bladder; or (ii) substantial leakage of the contents of a collecting device; sufficient to require cleaning and a change in clothing.') {
      this.questionScore_9 = 15
    } else if (this.favoriteAnswer_q_9 === 'The majority of the time is at risk of loss of control leading to extensive evacuation of the bowel and/or voiding of the bladder, sufficient to require cleaning and a change in clothing, if not able to reach a toilet quickly' ) {
      this.questionScore_9 = 6
    }  else  {
      this.questionScore_9 = 0
    }

    if (this.favoriteAnswer_q_10 === 'At least once a week, has an involuntary episode of lost or altered consciousness resulting in significantly disrupted awareness or concentration. ') {
      this.questionScore_10 = 15
    } else if (this.favoriteAnswer_q_10 === 'At least once a month, has an involuntary episode of lost or altered consciousness resulting in significantly disrupted awareness or concentration. ' ) {
      this.questionScore_10 = 6
    }  else  {
      this.questionScore_10 = 0
    }

    if (this.favoriteAnswer_q_11 === 'Cannot learn how to complete a simple task, such as setting an alarm clock') {
      this.questionScore_11 = 15
    } else if (this.favoriteAnswer_q_11 === 'Cannot learn anything beyond a simple task, such as setting an alarm clock.' ) {
      this.questionScore_11 = 9
    } else if (this.favoriteAnswer_q_11 === 'Cannot learn anything beyond a moderately complex task, such as the steps involved in operating a washing machine to clean clothes.' ) {
      this.questionScore_11 = 6
    } else  {
      this.questionScore_11 = 0
    }

    if (this.favoriteAnswer_q_12 === 'Reduced awareness of everyday hazards leads to a significant risk of: (i) injury to self or others; or (ii) damage to property or possessions, such that they require supervision for the majority of the time to maintain safety. ') {
      this.questionScore_12 = 15
    } else if (this.favoriteAnswer_q_12 === 'Reduced awareness of everyday hazards leads to a significant risk of (i) injury to self or others; or (ii) damage to property or possessions, such that they frequently require supervision to maintain safety.') {
      this.questionScore_12 = 9
    } else if (this.favoriteAnswer_q_12 === 'Cannot learn anything beyond a moderately complex task, such as the steps involved in operating a washing machine to clean clothes.' ) {
      this.questionScore_12 = 6
    } else  {
      this.questionScore_12 = 0
    }

    if (this.favoriteAnswer_q_13 === 'Cannot, due to impaired mental function, reliably initiate or complete at least 2 sequential personal actions. ') {
      this.questionScore_13 = 15
    } else if (this.favoriteAnswer_q_13 === 'Cannot, due to impaired mental function, reliably initiate or complete at least 2 personal actions for the majority of the time.') {
      this.questionScore_13 = 9
    } else if (this.favoriteAnswer_q_13 === 'Frequently cannot, due to impaired mental function, reliably initiate or complete at least 2 personal actions.' ) {
      this.questionScore_13 = 6
    } else  {
      this.questionScore_13 = 0
    }

    if (this.favoriteAnswer_q_14 === 'Cannot cope with any change to the extent that day to day life cannot be managed.') {
      this.questionScore_14 = 15
    } else if (this.favoriteAnswer_q_14 === 'Cannot cope with minor planned change (such as a pre-arranged change to the routine time scheduled for a lunch break), to the extent that overall day to day life is made significantly more difficult.') {
      this.questionScore_14 = 9
    } else if (this.favoriteAnswer_q_14 === 'Cannot cope with minor unplanned change (such as the timing of an appointment on the day it is due to occur), to the extent that overall, day to day life is made significantly more difficult.' ) {
      this.questionScore_14 = 6
    } else  {
      this.questionScore_14 = 0
    }

    if (this.favoriteAnswer_q_15 === 'Cannot get to any place outside the claimant\'s home with which the claimant is familiar.') {
      this.questionScore_15 = 15
    } else if (this.favoriteAnswer_q_15 === 'Is unable to get to a specified place with which the claimant is familiar, without being accompanied by another person.') {
      this.questionScore_15 = 9
    } else if (this.favoriteAnswer_q_15 === 'Is unable to get to a specified place with which the claimant is unfamiliar without being accompanied by another person.' ) {
      this.questionScore_15 = 6
    } else  {
      this.questionScore_15 = 0
    }

    if (this.favoriteAnswer_q_16 === 'Engagement in social contact is always precluded due to difficulty relating to others or significant distress experienced by the individual.') {
      this.questionScore_16 = 15
    } else if (this.favoriteAnswer_q_16 === 'Engagement in social contact with someone unfamiliar to the claimant is always precluded due to difficulty relating to others or significant distress experienced by the individual.') {
      this.questionScore_16 = 9
    } else if (this.favoriteAnswer_q_16 === 'Engagement in social contact with someone unfamiliar to the claimant is not possible for the majority of the time due to difficulty relating to others or significant distress experienced by the individual.' ) {
      this.questionScore_16 = 6
    } else  {
      this.questionScore_16 = 0
    }

    if (this.favoriteAnswer_q_17 === 'Has, on a daily basis, uncontrollable episodes of aggressive or disinhibited behaviour that would be unreasonable in any workplace.') {
      this.questionScore_17 = 15
    } else if (this.favoriteAnswer_q_17 === 'Frequently has uncontrollable episodes of aggressive or disinhibited behaviour that would be unreasonable in any workplace.') {
      this.questionScore_17 = 15
    } else if (this.favoriteAnswer_q_17 === 'Occasionally has uncontrollable episodes of aggressive or disinhibited behaviour that would be unreasonable in any workplace.' ) {
      this.questionScore_17 = 9
    } else  {
      this.questionScore_17 = 0
    }


    this.totalScore = this.questionScore_1 + this.questionScore_2 + this.questionScore_3 + this.questionScore_4 + this.questionScore_5 + this.questionScore_6 + this.questionScore_7 + this.questionScore_8 + this.questionScore_9 + this.questionScore_10 + this.questionScore_11 + this.questionScore_12 + this.questionScore_13 + this.questionScore_14 + this.questionScore_15 + this.questionScore_16 + this.questionScore_17

  }

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
