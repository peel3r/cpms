import {Component} from '@angular/core';
import {AuthService} from '../services'
@Component({
  selector: 'app-bar',
  styles: [`
  .app-bar {
  height: 65px;
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
  template:`
    <header class="app-bar row middle-xs">
  <span [routerLink]=" ['']" 
  class="logo col-xs-6"
  >
      Chronic Pain App
  
  </span> 
  <nav class="col-xs-6">
    <div class="row middle-xs between-xs">
      <button 
      md-raised-button 
      [routerLink]=" ['./articles']"
      class="shadow-1"
      >      
      {{library}}
      
      </button>
      <button 
      md-raised-button
       class="shadow-1"
      >
      Steps
      
      </button>
      <button 
      md-raised-button 
      [routerLink]=" ['./diaries']"
      class="shadow-1"
      >      
      Pain Manager
      
      </button>
      <button 
      class="shadow-1"
      md-raised-button 
      (click)="changeMode()"
      color="warn"
      >      
      {{mode}}
      
      </button>
    </div>
  </nav>
</header>
`
})

export class AppBar {
  mode: string;
  library: string = ''
  constructor(private authService: AuthService){}

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
