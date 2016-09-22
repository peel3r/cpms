import {Component} from '@angular/core';
import { AppState } from '../app.service';
import {DiaryService} from '../services'

@Component({
  selector: 'diary',
  styleUrls: ['./diary.style.css'],
  templateUrl: './diary.template.html'

})

export class Diary {
  diaries = [];
  date = Date.now()
  painLevelCount = []
  constructor( private diaryService: DiaryService) {
    this.diaryService.getDiaries()
      .subscribe(res => this.diaries = res)
  }


  onCreateDiary(diary) {
    this.diaryService.createDiary(diary)
      .subscribe(diary => this.diaries.push(diary));
  }


}
