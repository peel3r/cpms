import { Component , Input, Output } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { Article } from '../article/article.component';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    Article
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {

  fbInner = "<img src='../assets/img/custom/facebook.svg'>";
  twitterInner = "<img src='../assets/img/custom/twitter.svg'>";
  pintInner = "<img src='../assets/img/custom/pinterest.svg'>";
  googleInner = "<img src='../assets/img/custom/google-plus.svg'>";
  tumblrInner = "<img src='../assets/img/custom/tumblr.svg'>";

  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    //this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
