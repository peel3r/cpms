import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';
import { StoreHelper } from './store-helper';

@Injectable()
export class DiaryService {
  path: string = '/api/diaries';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createDiary(diary) {
    console.log('a',diary)

    return this.apiService.post(this.path, diary)
      .do(savedDiary => this.storeHelper.add('diaries', savedDiary));
  }

  getDiaries() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('diaries', res.data));
  }

  getUserDiaries(userId) {
    return this.getDiaries()
      .map(diaries => diaries.filter(d => d.author._id === userId));


  }

  getDiary(id) {
    return this.getDiaries()
      .map(diaries => diaries.find(d => d._id === id));

  }

  completeDiary(diary) {
    return this.apiService.delete(`${this.path}/${diary.id}`)
      .do(res => this.storeHelper.findAndDelete('diaries', res.id));

  }
}
