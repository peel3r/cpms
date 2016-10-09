import { Component } from '@angular/core';
import {EsaService} from '../services'
import {Router} from "@angular/router";

@Component({
  selector: 'question-container',

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
  templateUrl: './esa.template.html'
})
export class Esa {


  esas = [];
  date = Date.now()
  USER_NAME = window.localStorage.getItem('cpms_user_name')
  USER_ID = window.localStorage.getItem('cpms_user_id')
  onLeave: boolean = true

  constructor(private esaService: EsaService, private router: Router) {
    this.esaService.getUserEsas(this.USER_ID)
      .subscribe(
        res => {
          console.log(this.esas)
        })
  }

  toUserProfile(): void {
    this.router.navigate(['', 'users', this.USER_ID]);
  }

  onCreateEsa(esa) {
    console.log('esa component', esa)
    this.esaService.createEsa(esa)
      .subscribe(esa => this.esas.push(esa));
  }

  toggle() {
    this.onLeave = !this.onLeave;
  }

  ngOnInit() {
    setTimeout(() => {
      this.toggle()
    }, 1500)
  }
}
