import { Injectable } from '@angular/core';
// import { StoreHelper } from './store-helper';
// import { Store} from '../store';
import { ApiService } from './api';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  USER_ID: string = 'cpms_user_id';
  USER_NAME: string = 'cpms_user_name';
  lock = new Auth0Lock('fzje2RJILpxAQFuEzG7T5GN5Wo0knCNP', 'peeler.eu.auth0.com', {});


  id: string;
  constructor(
    // private storeHelper: StoreHelper,
    private api: ApiService,
    private router: Router,
    // private store: Store
  ) {

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });

    const token = window.localStorage.getItem(this.JWT_KEY);
    const user_id = window.localStorage.getItem(this.USER_ID);
    const user_name = window.localStorage.getItem(this.USER_NAME);

    if (token) {
      this.setJwt(token, user_id, user_name);
    }
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };

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
