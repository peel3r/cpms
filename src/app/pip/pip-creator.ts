import {Component, Output, EventEmitter, HostListener} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {EsaService} from "../services/esa";


@Component({
  selector: 'pip-creator',
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
  templateUrl: './pip-creator.template.html'

})



export class PipCreator {

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

  favoriteAnswer_q_1: string = 'Can prepare and cook a simple meal unaided.';
  favoriteAnswer_q_2: string = 'Can take nutrition unaided.';
  favoriteAnswer_q_3: string = 'Either - (i) does not receive medication or therapy or need to monitor a health condition; or (ii) can manage medication or therapy or monitor a health condition unaided.';
  favoriteAnswer_q_4: string = 'Can wash and bathe unaided.';
  favoriteAnswer_q_5: string = 'Can manage toilet needs or incontinence unaided.';
  favoriteAnswer_q_6: string = 'Can dress and undress unaided. ';
  favoriteAnswer_q_7: string = 'Can express and understand verbal information unaided.';
  favoriteAnswer_q_8: string = 'Can read and understand basic and complex written information either unaided or using spectacles or contact lenses. ';
  favoriteAnswer_q_9: string = 'Can engage with other people unaided.';
  favoriteAnswer_q_10: string = 'Can manage complex budgeting decisions unaided.';
  favoriteAnswer_q_11: string = 'Can plan and follow the route of a journey unaided.';
  favoriteAnswer_q_12: string = 'Can stand and then move more than 200 metres, either aided or unaided.';


  answers_1_options = [
    'Can prepare and cook a simple meal unaided.',
    'Needs to use an aid or appliance to be able to either prepare or cook a simple meal.',
    'Cannot cook a simple meal using a conventional cooker but is able to do so using a microwave.',
    'Needs prompting to be able to either prepare or cook a simple meal.',
    'Needs supervision or assistance to either prepare or cook a simple meal.',
    'Cannot prepare and cook food.'
  ];
  answers_2_options = [
    'Can take nutrition unaided.',
    'Needs either - (i) to use an aid or appliance to take nutrition; or (ii) supervision to be able to take nutrition; or (iii) assistance to be able to cut up food.',
    'Needs a therapeutic source to take nutrition.',
    'Needs prompting to be able to take nutrition.',
    'Needs assistance to be able to manage a therapeutic source to take nutrition.',
    'Cannot convey food and drink to their mouth and needs another person to do so.'
  ];
  answers_3_options = [
    'Either - (i) does not receive medication or therapy or need to monitor a health condition; or (ii) can manage medication or therapy or monitor a health condition unaided.',
    'to use an aid or appliance to be able to manage medication; or (ii) supervision, prompting or assistance to be able to manage medication or monitor a health condition.',
    'Needs supervision, prompting or assistance to be able to manage therapy that takes no more than 3.5 hours a week.',
    'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 3.5 but no more than 7 hours a week.',
    'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 7 but no more than 14 hours a week.',
    'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 14 hours a week.'
  ];
  answers_4_options = [
    'Can wash and bathe unaided.',
    'Needs to use an aid or appliance to be able to wash or bathe. ',
    'Needs supervision or prompting to be able to wash or bathe. ',
    'Needs assistance to be able to wash either their hair or body below the waist.',
    'Needs assistance to be able to get in or out of a bath or shower.',
    'Needs assistance to be able to wash their body between the shoulders and waist. ',
    'Cannot wash and bathe at all and needs another person to wash their entire body.'
  ];
  answers_5_options = [
    'Can manage toilet needs or incontinence unaided.',
    'Needs to use an aid or appliance to be able to manage toilet needs or incontinence.',
    'Needs supervision or prompting to be able to manage toilet needs.',
    'Needs assistance to be able to manage toilet needs. ',
    'Needs assistance to be able to manage incontinence of either bladder or bowel.',
    'Needs assistance to be able to manage incontinence of both bladder and bowel. '
  ];
  answers_6_options = [
    'Can dress and undress unaided. ',
    'Needs to use an aid or appliance to be able to dress or undress. ',
    'Needs either - (i) prompting to be able to dress, undress or determine appropriate circumstances for remaining clothed; or (ii) prompting or assistance to be able to select appropriate clothing.',
    'Needs assistance to be able to dress or undress their lower body.',
    'Needs assistance to be able to dress or undress their upper body.',
    'Cannot dress or undress at all. '
    ];
  answers_7_options = [
    'Can express and understand verbal information unaided.',
    'Needs to use an aid or appliance to be able to speak or hear.',
    'Needs communication support to be able to express or understand complex verbal information.',
    'Needs communication support to be able to express or understand basic verbal information.',
    'Cannot express or understand verbal information at all even with communication support.'
  ];
  answers_8_options = [
    'Can read and understand basic and complex written information either unaided or using spectacles or contact lenses. ',
    'Needs to use an aid or appliance, other than spectacles or contact lenses, to be able to read or understand either basic or complex written information.',
    'Needs prompting to be able to read or understand complex written information.',
    'Needs prompting to be able to read or understand basic written information. ',
    'Cannot read or understand signs, symbols or words at all.'
  ];
  answers_9_options = [
    'Can engage with other people unaided.',
    'Needs prompting to be able to engage with other people.',
    'Needs social support to be able to engage with other people.',
    'Cannot engage with other people due to such engagement causing either - (i) overwhelming psychological distress to the claimant; or (ii) the claimant to exhibit behaviour which would result in a substantial risk of harm to the claimant or another person.'
  ];
  answers_10_options = [
    'Can manage complex budgeting decisions unaided.',
    'Needs prompting or assistance to be able to make complex budgeting decisions.',
    'Needs prompting or assistance to be able to make simple budgeting decisions.',
    'Cannot make any budgeting decisions at all.'
  ];
  answers_11_options = [
    'Can plan and follow the route of a journey unaided.',
    'Needs prompting to be able to undertake any journey to avoid overwhelming psychological distress to the claimant.',
    'Cannot plan the route of a journey. ',
    'Cannot follow the route of an unfamiliar journey without another person, assistance dog or orientation aid.',
    'Cannot undertake any journey because it would cause overwhelming psychological distress to the claimant.',
    'Cannot follow the route of a familiar journey without another person, an assistance dog or an orientation aid. '
  ];
  answers_12_options = [
    'Can stand and then move more than 200 metres, either aided or unaided.',
    'Can stand and then move more than 50 metres but no more than 200 metres, either aided or unaided.',
    'Can stand and then move unaided more than 20 metres but no more than 50 metres.',
    'Can stand and then move using an aid or appliance more than 20 metres but no more than 50 metres.',
    'Can stand and then move more than 1 metre but no more than 20 metres, either aided or unaided. ',
    'Cannot, either aided or unaided, (i) stand; or (ii) move more than 1 metre.'
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private esaService: EsaService) {}



  ngDoCheck() {
    if (this.favoriteAnswer_q_1 === 'Cannot prepare and cook food.') {
      this.questionScore_1 = 8
      this.totalScore = this.questionScore_1
    } else if (this.favoriteAnswer_q_1 === 'Needs to use an aid or appliance to be able to either prepare or cook a simple meal.'  ) {
      this.questionScore_1 = 2
    } else if (this.favoriteAnswer_q_1 === 'Cannot cook a simple meal using a conventional cooker but is able to do so using a microwave.') {
      this.questionScore_1 = 2
    } else if (this.favoriteAnswer_q_1 === 'Needs prompting to be able to either prepare or cook a simple meal.' ) {
      this.questionScore_1 = 2
    } else if (this.favoriteAnswer_q_1 === 'Needs prompting to be able to either prepare or cook a simple meal.' ) {
      this.questionScore_1 = 2
    } else if (this.favoriteAnswer_q_1 === 'Needs supervision or assistance to either prepare or cook a simple meal.' ) {
      this.questionScore_1 = 4
    } else  {
      this.questionScore_1 = 0
    }

    if (this.favoriteAnswer_q_2 === 'Needs either - (i) to use an aid or appliance to take nutrition; or (ii) supervision to be able to take nutrition; or (iii) assistance to be able to cut up food.') {
      this.questionScore_2 = 2
    } else if (this.favoriteAnswer_q_2 === 'Needs a therapeutic source to take nutrition.' ) {
      this.questionScore_2 = 2
    } else if (this.favoriteAnswer_q_2 === 'Needs prompting to be able to take nutrition.' ) {
      this.questionScore_2 = 4
    } else if (this.favoriteAnswer_q_2 === 'Needs assistance to be able to manage a therapeutic source to take nutrition.' ) {
      this.questionScore_2 = 6
    }else if (this.favoriteAnswer_q_2 === 'Cannot convey food and drink to their mouth and needs another person to do so.') {
      this.questionScore_2 = 10
    }else  {
      this.questionScore_2 = 0
    }

    if (this.favoriteAnswer_q_3 === 'to use an aid or appliance to be able to manage medication; or (ii) supervision, prompting or assistance to be able to manage medication or monitor a health condition.') {
      this.questionScore_3 = 1
    } else if (this.favoriteAnswer_q_3 === 'Needs supervision, prompting or assistance to be able to manage therapy that takes no more than 3.5 hours a week.' ) {
      this.questionScore_3 = 2
    } else if (this.favoriteAnswer_q_3 === 'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 3.5 but no more than 7 hours a week.' ) {
      this.questionScore_3 = 4
    } else if (this.favoriteAnswer_q_3 === 'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 7 but no more than 14 hours a week.' ) {
      this.questionScore_3 = 6
    } else if (this.favoriteAnswer_q_3 === 'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 14 hours a week.' ) {
      this.questionScore_3 = 8
    } else  {
      this.questionScore_3 = 0
    }

    if (this.favoriteAnswer_q_4 === 'Needs to use an aid or appliance to be able to wash or bathe. ') {
      this.questionScore_4 = 2
    } else if (this.favoriteAnswer_q_4 === 'Needs supervision or prompting to be able to wash or bathe. ' ) {
      this.questionScore_4 = 2
    } else if (this.favoriteAnswer_q_4 === 'Needs assistance to be able to wash either their hair or body below the waist.' ) {
      this.questionScore_4 = 2
    } else if (this.favoriteAnswer_q_4 === 'Needs assistance to be able to get in or out of a bath or shower.' ) {
      this.questionScore_4 = 3
    } else if (this.favoriteAnswer_q_4 === 'Needs assistance to be able to wash their body between the shoulders and waist. ' ) {
      this.questionScore_4 = 4
    } else if (this.favoriteAnswer_q_4 === 'Cannot wash and bathe at all and needs another person to wash their entire body.' ) {
      this.questionScore_4 = 8
    } else  {
      this.questionScore_4 = 0
    }

    if (this.favoriteAnswer_q_5 === 'Needs to use an aid or appliance to be able to manage toilet needs or incontinence.') {
      this.questionScore_5 = 2
    }  else if (this.favoriteAnswer_q_5 === 'Needs supervision or prompting to be able to manage toilet needs.' ) {
      this.questionScore_5 = 2
    }  else if (this.favoriteAnswer_q_5 === 'Needs assistance to be able to manage toilet needs. ' ) {
      this.questionScore_5 = 4
    } else if (this.favoriteAnswer_q_5 === 'Needs assistance to be able to manage incontinence of either bladder or bowel.' ) {
      this.questionScore_5 = 6
    } else if (this.favoriteAnswer_q_5 === 'Needs assistance to be able to manage incontinence of both bladder and bowel. ' ) {
      this.questionScore_5 = 8
    } else  {
      this.questionScore_5 = 0
    }

    if (this.favoriteAnswer_q_6 ===  'Needs to use an aid or appliance to be able to dress or undress. ') {
      this.questionScore_6 = 2
    } else if (this.favoriteAnswer_q_6 === 'Needs either - (i) prompting to be able to dress, undress or determine appropriate circumstances for remaining clothed; or (ii) prompting or assistance to be able to select appropriate clothing.' ) {
      this.questionScore_6 = 2
    } else if (this.favoriteAnswer_q_6 === 'Needs assistance to be able to dress or undress their lower body.') {
      this.questionScore_6 = 2
    } else if (this.favoriteAnswer_q_6 === 'Needs assistance to be able to dress or undress their upper body.' ) {
      this.questionScore_6 = 4
    } else if (this.favoriteAnswer_q_6 === 'Cannot dress or undress at all. ' ) {
      this.questionScore_6 = 8
    } else  {
      this.questionScore_6 = 0
    }

    if (this.favoriteAnswer_q_7 === 'Needs to use an aid or appliance to be able to speak or hear.') {
      this.questionScore_7 = 2
    } else if (this.favoriteAnswer_q_7 === 'Needs communication support to be able to express or understand complex verbal information.' ) {
      this.questionScore_7 = 4
    } else if (this.favoriteAnswer_q_7 === 'Needs communication support to be able to express or understand basic verbal information.' ) {
      this.questionScore_7 = 8
    } else if (this.favoriteAnswer_q_7 === 'Cannot express or understand verbal information at all even with communication support.' ) {
      this.questionScore_7 = 12
    }  else  {
      this.questionScore_7 = 0
    }

    if (this.favoriteAnswer_q_8 === 'Needs to use an aid or appliance, other than spectacles or contact lenses, to be able to read or understand either basic or complex written information.') {
      this.questionScore_8 = 2
    } else if (this.favoriteAnswer_q_8 === 'Needs prompting to be able to read or understand complex written information.' ) {
      this.questionScore_8 = 2
    } else if (this.favoriteAnswer_q_8 ===  'Needs prompting to be able to read or understand basic written information. ') {
      this.questionScore_8 = 4
    } else if (this.favoriteAnswer_q_8 ===  'Cannot read or understand signs, symbols or words at all.') {
      this.questionScore_8 = 8
    } else  {
      this.questionScore_8 = 0
    }

    if (this.favoriteAnswer_q_9 === 'Needs prompting to be able to engage with other people.') {
      this.questionScore_9 = 2
    } else if (this.favoriteAnswer_q_9 === 'Needs social support to be able to engage with other people.' ) {
      this.questionScore_9 = 4
    } else if (this.favoriteAnswer_q_9 === 'Cannot engage with other people due to such engagement causing either - (i) overwhelming psychological distress to the claimant; or (ii) the claimant to exhibit behaviour which would result in a substantial risk of harm to the claimant or another person.' ) {
      this.questionScore_9 = 8
    } else  {
      this.questionScore_9 = 0
    }

    if (this.favoriteAnswer_q_10 === 'Needs prompting or assistance to be able to make complex budgeting decisions.') {
      this.questionScore_10 = 2
    } else if (this.favoriteAnswer_q_10 === 'Needs prompting or assistance to be able to make simple budgeting decisions.' ) {
      this.questionScore_10 = 4
    }else if (this.favoriteAnswer_q_10 === 'Cannot make any budgeting decisions at all.' ) {
      this.questionScore_10 = 6
    }  else  {
      this.questionScore_10 = 0
    }

    if (this.favoriteAnswer_q_11 === 'Needs prompting to be able to undertake any journey to avoid overwhelming psychological distress to the claimant.') {
      this.questionScore_11 = 4
    } else if (this.favoriteAnswer_q_11 === 'Cannot plan the route of a journey. ' ) {
      this.questionScore_11 = 8
    }else if (this.favoriteAnswer_q_11 === 'Cannot follow the route of an unfamiliar journey without another person, assistance dog or orientation aid.' ) {
      this.questionScore_11 = 10
    }else if (this.favoriteAnswer_q_11 === 'Cannot undertake any journey because it would cause overwhelming psychological distress to the claimant.' ) {
      this.questionScore_11 = 10
    } else if (this.favoriteAnswer_q_11 === 'Cannot follow the route of a familiar journey without another person, an assistance dog or an orientation aid. ' ) {
      this.questionScore_11 = 12
    } else  {
      this.questionScore_11 = 0
    }

    if (this.favoriteAnswer_q_12 === 'Can stand and then move more than 50 metres but no more than 200 metres, either aided or unaided.') {
      this.questionScore_12 = 4
    } else if (this.favoriteAnswer_q_12 === 'Can stand and then move unaided more than 20 metres but no more than 50 metres.') {
      this.questionScore_12 = 8
    }else if (this.favoriteAnswer_q_12 === 'Can stand and then move using an aid or appliance more than 20 metres but no more than 50 metres.') {
      this.questionScore_12 = 10
    }else if (this.favoriteAnswer_q_12 === 'Can stand and then move more than 1 metre but no more than 20 metres, either aided or unaided. ') {
      this.questionScore_12 = 12
    } else if (this.favoriteAnswer_q_12 === 'Cannot, either aided or unaided, (i) stand; or (ii) move more than 1 metre.' ) {
      this.questionScore_12 = 12
    } else  {
      this.questionScore_12 = 0
    }




    this.totalScore = this.questionScore_1 + this.questionScore_2 + this.questionScore_3 + this.questionScore_4 + this.questionScore_5 + this.questionScore_6 + this.questionScore_7 + this.questionScore_8 + this.questionScore_9 + this.questionScore_10 + this.questionScore_11 + this.questionScore_12

  }
}
