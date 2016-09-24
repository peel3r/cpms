import { Injectable } from '@angular/core';
// import { StoreHelper } from './store-helper';
// import { Store} from '../store';
import { ApiService } from './api';
import {Observable} from 'rxjs/Observable';
import {CanActivate, Router} from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  id:string
  constructor(
    // private storeHelper: StoreHelper,
    private api: ApiService,
    private router: Router,
    // private store: Store
  ) {
    const token = window.localStorage.getItem(this.JWT_KEY);
    if (token) {
      this.setJwt(token);
    }
  }

  setJwt(jwt: string) {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    this.api.setHeaders({Authorization: `Bearer ${jwt}`});
  }

  isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem(this.JWT_KEY));
  }

  canActivate(): boolean {
    const isAuth = this.isAuthorized();
    if (!isAuth) {
      this.router.navigate(['', 'auth']);
    }
    return isAuth
  }

  authenticate(path, creds): Observable<any> {
    return this.api.post(`/${path}`, creds)
      .map(res => {
        this.setJwt(res.token);
console.log(res)
        this.router.navigate(['', 'users', res.user_id]);
      })

  }

  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.router.navigate(['', 'auth']);
  }
}
