import {Component} from '@angular/core';
import { AppState } from '../app.service';
import {DiaryService} from '../services'
import {Router} from "@angular/router";
import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  selector: 'diary',
  styleUrls: ['./diary.style.css'],
  templateUrl: './diary.template.html',
  providers: [
    Title,
    DiaryService
  ],

})

export class Diary {
  localState = { value: '' };
  diaries = [];
  date = Date.now()
  USER_NAME = window.localStorage.getItem('cpms_user_name')
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true
  constructor(
    public appState: AppState,
    public title: Title,
    public diaryService: DiaryService,
    public router: Router

  ) {


    setTimeout(() => {
      this.toggle()
    },1500)
    this.diaryService.getUserDiaries(this.USER_ID)
      .subscribe(
        res => {this.diaries =  res.reverse()})
  }

  painLevelCount = []

  toUserProfile(): void {
    this.router.navigate(['','users', this.USER_ID]);
  }

  onCreateDiary(diary) {
    this.diaryService.createDiary(diary)
      .subscribe(diary => this.diaries.push(diary));
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }

  ngOnInit(){
    console.log('hello `Diary` component');
    //this.title.getData().subscribe(data => this.data = data);

  }
  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
