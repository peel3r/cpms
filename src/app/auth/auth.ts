import { Component , Input} from '@angular/core';
// import { FORM_DIRECTIVES } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'auth-container',

  styles: [`
    .auth {
      height: 100%;
    }
    input {
      border-bottom: 1px solid lightgrey;
    }
    .ng-invalid.ng-dirty {
      border-bottom: 1px solid red;
    }
    form {
      width: 100%;
      border-radius: 2px;
      background-color: white;
      padding: 20px;
      height: 400px;
    }
    .inputs {
      height: 100%;
      position: relative;
    }
    .link {
      color: lightblue;
    }
    .link:hover {
      background-color: transparent;
    }
    .title {
      font-size: 36px;
      font-weight: 300;
      text-transform: capitalize;
    }
    .error {
      color: red;
      position: absolute;
      right: 20px;
    }
  `],
  template: `
    <div class="auth row center-xs middle-xs">
    
      <form class="col-xs-6 shadow-2" (ngSubmit)="authenticate()" #authForm="ngForm">
        <div class="inputs row center-xs middle-xs">
          <h3 class="col-xs-8 title">
            {{ button }}
          </h3>
          <input
            class="col-xs-8"
            type="text"
            name="email"
            placeholder="email"
            required
            [(ngModel)]="user.username"
            #email="ngModel"
          >
          <div class="error" [hidden]="email.valid || email.pristine">email is invalid</div>
          <input
            class="col-xs-8"
            type="password"
            name="password"
            placeholder="password"
            required
            [(ngModel)]="user.password"
            #password="ngModel"
          >
          <div class="error" [hidden]="password.valid || password.pristine">password is required</div>
          <div class="actions col-xs-12">
            <div class="row center-xs">
              <button
                [disabled]="!authForm.form.valid"
                type="submit"
  
                class="btn-light"
              >
                {{ button }}
              </button>
              <a (click)="changeMode()" class="btn-light link">
                {{ linkText }}
              </a>
           </div>
         </div>
        </div>
      </form>
    </div>
  `
})
export class Auth {
  user = {
    password: '',
    username: ''
  };
  errorMessage:string;


  button: string  = 'sign in'
  route: string = 'auth/signin';
  linkText: string = 'Don\'t have an account?';


  constructor(private auth: AuthService, private router: Router,public toastr: ToastsManager) {
  }

  changeMode() {
    if (this.route === 'auth/signin') {
      this.button = 'sign Up'
      this.route = 'api/users'
      this.linkText = 'Already have an account?'
    } else {
      this.button = 'sign in'
      this.route = 'auth/signin';
      this.linkText = 'Don\'t have an account?';
    }
  }

  // ngOnDestroy() {
  //   this.toastr.success("Hi " + this.user.username +" you successfully logged in")
  // }

  authenticate() {
    this.auth.authenticate(this.route, this.user)
  .subscribe(
    res => res,

    err => this.toastr.success(err))

  }


}
