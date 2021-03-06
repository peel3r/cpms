import {Component} from '@angular/core';
import {AuthService} from '../services'
import {ToastsManager} from "ng2-toastr";
import {DiaryService} from "../services/painDiaries";
import {Router} from "@angular/router";


@Component({
  selector: 'app-bar',
  styles: [`
  .app-bar {
  height: 120px;
  padding: 25px 30px;
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
  modeIn: string;

  library: string = ''
  user_id = window.localStorage.getItem('cpms_user_id')
  user_name = window.localStorage.getItem('cpms_user_name')


  private _open: boolean = false;

  private _toggleSidebar() {
    this._open = !this._open;
  }


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
      this.modeIn = ''

    } else {
      this.mode = ''
      this.library = ''
      this.modeIn = 'Sign In'

    }
  }

  changeModeOut() {
    if (this.mode == 'signin') {
      this.mode = 'signout'
      this.modeIn = ''

    } else {
      this.mode = 'signin'
      this.modeIn = ''
      this.authService.signout()
    }
  }

  changeModeIn() {
    if (this.modeIn == 'Sign In') {
      this.modeIn = ''
    } else {
      this.modeIn = ''

    }
  }


  signout() {
    this.authService.signout()
  }
}
