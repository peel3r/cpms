import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class DiaryService {
  path: string = '/api/diaries';
  constructor(private apiService: ApiService) {}

  createDiary(diary) {
    return this.apiService.post(this.path, diary)
  }

  getDiaries() {
    return this.apiService.get(this.path)
  }

  completeDiary(diary) {
    return this.apiService.delete(`${this.path}/${diary.id}`)
  }
}
