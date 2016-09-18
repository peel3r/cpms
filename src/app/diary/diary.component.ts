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

  constructor(public appState: AppState, private diaryService: DiaryService) {
    this.diaryService.getDiaries()
      .subscribe(res => this.diaries = res);
  }

  onCreateDiary(diary) {
    this.diaryService.createDiary(diary)
      .subscribe(diary => this.diaries.push(diary));
  }

  // Set our default values
  // localState = { value: '' };
  // TypeScript public modifiers


  ngOnInit() {
    console.log('hello `Diary` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  // submitState(value: string) {
  //   console.log('submitState', value);
  //   this.appState.set('value', value);
  //   this.localState.value = '';
  // }
}
