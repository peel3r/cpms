import {Component, Input} from '@angular/core';

@Component({
  selector: 'diary-card',

  template: `

<div class="card-container row shadow-3">
<div class="col-xs-4">
{{diary.date | date:'dd/MMM/yyyy'}}  <br>  

<button
          md-raised-button
          [routerLink]=" [ diary._id]"
          class="shadow-1"
        >
          More

        </button>


</div>
   <div class="col-xs-4">Pain: <br><md-slider
   value="{{diary.overAllPainLevel}}"
            tick-interval="1"
            step="1" max="10"
            disabled
            #slider1
          ></md-slider>
          {{diary.overAllPainLevel}}</div>
      <div class="col-xs-4">Fatigue: <br><md-slider
   value="{{diary.overAllMoodLevel}}"
            tick-interval="1"
            step="1" max="10"
            disabled
            #slider1
          ></md-slider>
          {{diary.overAllMoodLevel}}</div>
 </div>

`
})

export class DiaryCard {
  @Input() diary = {}
}
