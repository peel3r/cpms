import { Injectable } from '@angular/core';
// import { StoreHelper } from './store-helper';
// import { Store} from '../store';
import { ApiService } from './api';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  USER_ID: string = 'cpms_user_id';
  USER_NAME: string = 'cpms_user_name';


  id: string;
  constructor(
    // private storeHelper: StoreHelper,
    private api: ApiService,
    private router: Router,
    // private store: Store
  ) {
    const token = window.localStorage.getItem(this.JWT_KEY);
    const user_id = window.localStorage.getItem(this.USER_ID);
    const user_name = window.localStorage.getItem(this.USER_NAME);

    if (token) {
      this.setJwt(token, user_id, user_name);
    }
  }

  setJwt(jwt: string, user_id: string, user_name: string) {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    window.localStorage.setItem(this.USER_ID, user_id);
    window.localStorage.setItem(this.USER_NAME, user_name);

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
    return isAuth;
  }

  authenticate(path, creds): Observable<any> {
    return this.api.post(`/${path}`, creds)
      .map((res) => {
        console.log('res',res)
        this.setJwt(res.token, res.user_id, res.username);
        // this.router.navigate(['', 'users', res.user_id]); // to user profile
        this.router.navigate(['', 'diaries']); // to create diary

      });

  }

  signout() {
    window.localStorage.removeItem(this.JWT_KEY);
    window.localStorage.removeItem(this.USER_ID);
    window.localStorage.removeItem(this.USER_NAME);
    this.router.navigate(['', 'auth']);
  }
}
