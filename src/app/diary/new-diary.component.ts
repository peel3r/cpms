import {Component} from '@angular/core';
import {DiaryService} from '../services'

@Component({
  selector: 'new-diary',
  styleUrls: ['./diary.style.css'],
  template: `
    <diary-creator (createDiary)="onCreateDiary($event)"></diary-creator>
`
})

export class NewDiary {
  diaries = [];

  constructor(private diaryService: DiaryService) {

  }

  onCreateDiary(diary) {
    this.diaryService.createDiary(diary)
      .subscribe(diary => this.diaries.push(diary));
  }

}
