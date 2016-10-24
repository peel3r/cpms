/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import {AuthService} from "./services/auth";
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <!--<app-bar></app-bar>-->
    <div style="margin-bottom: 80px;"></div>
    <navbar ></navbar>
    <main>

      <router-outlet></router-outlet>
      <app-footer></app-footer>

    </main>

    <footer>
      <div class="box home-wrapper">
      </div>
    </footer>
  `
})
export class App {


  constructor(
    public appState: AppState,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
