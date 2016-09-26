import {Component} from '@angular/core';
import {AuthService} from '../services'
import {ToastsManager} from "ng2-toastr";
import {DiaryService} from "../services/painDiaries";
import {Router} from "@angular/router";
@Component({
  selector: 'app-bar',
  styles: [`
  .app-bar {
  height: 140px;
  padding: 5px 30px;
  background-color: #00BCD4;
}
.logo {
  color: white;
  font-size: 30px;
  font-weight: 300;
  cursor: pointer;
}
.link {
  color: white;
  font-size: 24px;
  font-weight: 400; 
  cursor: pointer; 
}
`],
  templateUrl: './app-bar.template.html'
})

export class AppBar {
  mode: string;
  library: string = ''
  user_id = window.localStorage.getItem('cpms_user_id')
  user_name = window.localStorage.getItem('cpms_user_name')



  constructor(
                private authService: AuthService,
                private router: Router,
                private diaryService: DiaryService,
                public toastr: ToastsManager){

  }

  showSuccess() {
    this.toastr.success('Successfully logged out');
  }

  ngDoCheck() {

    if (localStorage.getItem('retain_token')) {
      this.mode = 'signout'
      this.library = 'Library'
    } else {
      this.mode = ''
      this.library = ''
    }
  }

  changeMode() {
    if (this.mode == 'signin') {
      this.mode = 'signout'
    } else {
      this.mode = 'signin'
      this.authService.signout()
    }
  }


  signout() {
    this.authService.signout()
  }
}
