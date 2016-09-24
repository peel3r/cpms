import {Component, OnInit,Input} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'diary-show',
  styleUrls: [`

`],
  templateUrl: 'user-show.template.html'
})

export class UserShow {
  // @Input() user = {}
  // id: string



  constructor(  private route: ActivatedRoute, private router: Router) {

    // route.params.subscribe(params => { this.id = params['id']; });
    //
    // this.userService.getUser(this.id)
    //   .subscribe(res => this.user = res);
  }
  //
  // onBack(): void {
  //   this.router.navigate(['/users']);
  // }
}
