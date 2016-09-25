import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';
import {StoreHelper} from './store-helper'


@Injectable()
export class UserService {
  path: string = '/api/users';
  constructor(
    private apiService: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createUser(user) {
    return this.apiService.post(this.path, user)
      .do(savedUser => this.storeHelper.add('users', savedUser))
  }

  getUsers() {
    return this.apiService.get(this.path)
      .do(res => this.storeHelper.update('users', res))
  }

  getUser(id) {
    return this.getUsers()
      .map(users => users.find(d=> d._id == id))

  }

  deleteUser(user) {
    return this.apiService.delete(`${this.path}/${user.id}`)
      .do(res => this.storeHelper.findAndDelete('users', res.id))
  }
}
