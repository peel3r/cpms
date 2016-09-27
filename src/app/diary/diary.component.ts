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
  USER_NAME = window.localStorage.getItem('cpms_user_name')
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean  = true

  painLevelCount = []
  constructor( private diaryService: DiaryService, private router: Router ) {
    this.diaryService.getUserDiaries(this.USER_ID)
      .subscribe(
        res => {this.diaries = res})
  }

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
    setTimeout(() => {
      this.toggle()
    },1500)
  }

}
