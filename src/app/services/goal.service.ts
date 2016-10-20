import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';
import { StoreHelper } from './store-helper';

@Injectable()
export class GoalService {
  path: string = '/api/goals';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createGoal(goal) {
    return this.apiService.post(this.path, goal)
      .do(savedGoal => this.storeHelper.add('diaries', savedGoal));
  }

  getGoals() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('diaries', res.data));
  }

  getUserGoals(userId) {
    return this.getGoals()
      .map(goals => goals.filter(d => d.author._id === userId));


  }

  getGoal(id) {
    return this.getGoals()
      .map(goals => goals.find(d => d._id === id));

  }

  completeGoal(goal) {
    return this.apiService.delete(`${this.path}/${goal.id}`)
      .do(res => this.storeHelper.findAndDelete('goals', res.id));

  }
}