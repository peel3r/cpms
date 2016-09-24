import {Component} from '@angular/core';
import {UserService} from '../services'

@Component({
  selector: 'user',
  styles: [`

`],
  templateUrl: './user-list.template.html'

})

export class UserList {
  users = [];
  date = Date.now()

  constructor( private userService: UserService) {
    this.userService.getUsers()
      .subscribe(res => this.users = res)
  }

  onCreateUser(user) {
    this.userService.createUser(user)
      .subscribe(user => this.users.push(user));
  }
}
