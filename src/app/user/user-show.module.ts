import {Component, OnInit,Input} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/users";

@Component({
  selector: 'diary-show',
  styleUrls: [ '../home/home.style.css' ],
  templateUrl: 'user-show.template.html'
})

export class UserShow {
    user = []
  id: string
  onLeave: boolean  = true

  user_id = window.localStorage.getItem('cpms_user_id')


  constructor(  private route: ActivatedRoute, private router: Router, private userService: UserService) {

    route.params.subscribe(params => { this.id = params['id']; });

    this.userService.getUser(this.id)
      .subscribe(res => this.user = res);
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }

  ngOnInit(){
    setTimeout(() => {
      this.toggle()
    },1500)
  }

  onBack(): void {
    this.router.navigate(['/users']);
  }
}
