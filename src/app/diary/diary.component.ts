import {Component} from '@angular/core';
import {DiaryService} from '../services'
import {Router} from "@angular/router";

@Component({
  selector: 'diary',
  styleUrls: ['./diary.style.css'],
  templateUrl: './diary.template.html'

})

export class Diary {
  diaries = [];
  date = Date.now()
  user_name = window.localStorage.getItem('cpms_user_name')
  user_id = window.localStorage.getItem('cpms_user_id')


  painLevelCount = []
  constructor( private diaryService: DiaryService, private router: Router ) {
    this.diaryService.getUserDiaries(this.user_id)
      .subscribe(
        res => {this.diaries = res})
  }

  toUserProfile(): void {
    this.router.navigate(['','users', this.user_id]);
  }

  onCreateDiary(diary) {
    this.diaryService.createDiary(diary)
      .subscribe(diary => this.diaries.push(diary));
  }




}
