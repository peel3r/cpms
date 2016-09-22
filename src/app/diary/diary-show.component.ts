import {Component, OnInit,Input} from '@angular/core';
import {DiaryService} from '../services/painDiaries'
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'diary-show',
  styleUrls: ['../diary/diary.style.css'],
  templateUrl: 'diary-show.template.html'
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
