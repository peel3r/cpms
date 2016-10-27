import { Injectable } from '@angular/core';
import {GoalList} from '../store'
import { StoreHelper } from './store-helper';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class GoalService {
  path: string = '/api/goals';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createGoal(goal) {
    return this.apiService.post(this.path, goal)
      .do(savedGoal => this.storeHelper.add('goals', savedGoal));
  }

  getGoals() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('goals', res));
  }

  getUserGoals(userId) {
    return this.getGoals()
      .map(goals => goals.filter(d => d.author._id === userId))


  }

  getGoal(id) {
    return this.getGoals()
      .map(goals => goals.find(d => d._id === id));

  }

  completeGoal(goal: GoalList) {
    return this.apiService.delete(`${this.path}/${goal._id}`)
      .do(res => this.storeHelper.findAndDelete('goals', res._id));

  }
}
