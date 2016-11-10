import { Injectable } from '@angular/core';
import {ActivityList} from '../store'
import { ApiService } from './api';
import 'rxjs/Rx';
import { StoreHelper } from './store-helper';

@Injectable()
export class ActivityService {
  path: string = '/api/activities';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createActivity(activity) {
    return this.apiService.post(this.path, activity)
      .do(savedActivity => this.storeHelper.add('activities', savedActivity));
  }

  getActivities() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('activities', res));
  }

  getEvents() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('activities', res));
  }

  getUserActivities(userId) {
    return this.getActivities()
      .map(activities => activities.filter(d => d.author._id === userId))
      .do(res => this.storeHelper.update('activities', res));



  }

  getActivity(id) {
    return this.getActivities()
      .map(activities => activities.find(d => d._id === id))
      .do(res => this.storeHelper.update('activities', res));


  }
  completeActivity(activity: ActivityList) {
    return this.apiService.put(`${this.path}/${activity._id}`, activity)
      .do(res => this.storeHelper.findAndDelete('activities', res._id));

  }
  deleteActivity(activity: ActivityList) {
    return this.apiService.delete(`${this.path}/${activity._id}`)
      .do(res => this.storeHelper.findAndDelete('activities', res._id));

  }
}
