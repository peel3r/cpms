import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdSliderModule } from '@angular2-material/slider';

import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import 'hammerjs'
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { XLarge } from './home/x-large';
import {AppBar} from "./ui/app-bar";
import {Article} from "./article/article.component";
import {ArticleCard} from "./article/article-card.component";
import {ArticleCreator} from "./article/article-creator";
import * as services from './services';
import {Auth} from "./auth/auth";
import {AuthService} from "./services/auth";
import {NewArticle} from "./article/new-article.component";
import {Diary} from "./diary/diary.component";
import {DiaryCard} from "./diary/diary-card.component";
import {DiaryCreator} from "./diary/diary-creator";
import {NewDiary} from "./diary/new-diary.component";
import {MdProgressCircle} from "@angular2-material/progress-circle";
import {MdProgressCircleModule} from "@angular2-material/progress-circle";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdInputModule} from "@angular2-material/input";
import {MdRadioModule} from "@angular2-material/radio";
import {MdSlideToggleModule} from "@angular2-material/slide-toggle";
import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import {Store} from "./store";
import {DiaryShow} from "./diary/diary-show.component";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};
const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */


@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    About,
    Home,
    NoContent,
    XLarge,
    AppBar,
    Article,
    ArticleCard,
    ArticleCreator,
    NewArticle,
    Diary,
    DiaryCard,
    DiaryCreator,
    NewDiary,
    Auth,
    DiaryShow

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    [
      MdButtonModule,
      MdCardModule,
      MdSliderModule,
      MdProgressCircleModule,
      MdCheckboxModule,
      MdInputModule,
      MdRadioModule,
      MdSlideToggleModule
    ],


    RouterModule.forRoot(ROUTES, { useHash: true })
  ],



  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    Store,
    ...mapValuesToArray(services),
    AuthService,
    [MdUniqueSelectionDispatcher],

  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

