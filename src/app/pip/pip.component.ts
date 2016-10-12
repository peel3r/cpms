import { Component } from '@angular/core';
import {EsaService} from '../services'
import {Router} from "@angular/router";

@Component({
  selector: 'pip-container',

  styles: [`
    .questions {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
      padding-left: 20px;
      padding-right: 20px;
    }
  `],
  templateUrl: './pip.template.html'
})
export class Pip {

  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean = true

  constructor(private esaService: EsaService, private router: Router) {
  }

  toUserProfile(): void {
    this.router.navigate(['', 'users', this.USER_ID]);
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }
}
