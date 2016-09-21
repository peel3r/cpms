import {Component, OnInit,Input} from '@angular/core';
import {DiaryService} from '../services/painDiaries'
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'diary-show',
  template: `
<div class="note-creator shadow-2">
    <div class="row shadow-3">
      <div class="col-xs">
        <div class="box">
          Overall Pain
          <md-slider
          disabled
            tick-interval="1"
            step="1" max="10"
            #slider1
            [(ngModel)]="diary.overAllPainLevel" name="first"
          ></md-slider>
          {{slider1.value}}
        </div>
      </div>
      <div class="col-xs">
        <div class="box">
          Overall Fatigue
          <md-slider
          disabled
            tick-interval="1"
            step="1" max="10"
            #sliderx
            [(ngModel)]="diary.overAllMoodLevel" name="first"
          ></md-slider>
          {{sliderx.value}}
        </div>
      </div>
    </div>
    <button
          md-raised-button
          (click)='onBack()'
          class="shadow-1"
        >
          Back

        </button>
    </div>
   
`
})

export class DiaryShow {
  @Input() diary = {}
  id: string

  powers = ['Aching','Sharp','Penetrating','Throbbing','Tender','Nagging','Shooting','Burning','Numb','Stabbing','Pinching','Gnaving'];


  constructor( private diaryService: DiaryService, private route: ActivatedRoute, private router: Router) {

    route.params.subscribe(params => { this.id = params['id']; });

    this.diaryService.getDiary(this.id)
      .subscribe(res => this.diary = res);
  }


  onBack(): void {
    this.router.navigate(['/diaries']);
  }



}
