/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import {Router} from "@angular/router";
import {ApplicationRef} from "@angular/core";
import {NavigationEnd} from "@angular/router";
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
    <app-bar></app-bar>
    <!--<nav>-->
      <!--<span>-->
        <!--<a [routerLink]=" ['./'] ">-->
          <!--Index-->
        <!--</a>-->
      <!--</span>-->
      <!--|-->
      <!--<span>-->
        <!--<a [routerLink]=" ['./home'] ">-->
          <!--Home-->
        <!--</a>-->
      <!--</span>-->
      <!--|-->
      <!--<span>-->
        <!--<a [routerLink]=" ['./detail'] ">-->
          <!--Detail-->
        <!--</a>-->
      <!--</span>-->
      <!--|-->
      <!--<span>-->
        <!--<a [routerLink]=" ['./about'] ">-->
          <!--About-->
        <!--</a>-->
      <!--</span>-->
    <!--</nav>-->

    <main>
      <router-outlet></router-outlet>
    </main>

    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->

    <footer>
      <div>

      </div>
    </footer>
  `
})
export class App {




  constructor(public appState: AppState,private _applicationRef: ApplicationRef, private _router: Router) {
    if(this.isMac()) {
      _router.events.subscribe(ev => {
        if(ev instanceof NavigationEnd) {
          setTimeout(() => {
            _applicationRef.zone.run(() => _applicationRef.tick())
          }, 500)
        }
      })
    }

  }

  isMac() {
    if(navigator.userAgent.indexOf('Mac') > -1) {
      return true
    }
    return false
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
