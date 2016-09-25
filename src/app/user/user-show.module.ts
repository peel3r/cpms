import {Component, OnInit,Input} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/users";

@Component({
  selector: 'diary-show',
  styleUrls: [`

`],
  templateUrl: 'user-show.template.html'
})

export class UserShow {
    user = []
  id: string

  user_id = window.localStorage.getItem('cpms_user_id')


  constructor(  private route: ActivatedRoute, private router: Router, private userService: UserService) {

    route.params.subscribe(params => { this.id = params['id']; });

    this.userService.getUser(this.id)
      .subscribe(res => this.user = res);
  }

  onBack(): void {
    this.router.navigate(['/users']);
  }
}
