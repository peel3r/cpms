import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { ModuleWithProviders }         from '@angular/core';

import { DataResolver } from './app.resolver';
import {AppBar} from "./ui/app-bar";

import {Auth} from "./auth/auth";
import {AuthService} from "./services/auth";

import {Article} from "./article/article.component";
import {NewArticle} from "./article/new-article.component";
import {Diary} from "./diary/diary.component";
import {NewDiary} from "./diary/new-diary.component";
import {DiaryShow} from "./diary/diary-show.component";
import {UserList} from "./user/user-list.module";
import {UserShow} from "./user/user-show.module";
import {Esa} from "./esa/esa.component";
import {EsaCreator} from "./esa/esa-creator";
import {Pip} from "./pip/pip.component";
import {Goal} from "./goal/goal.component";
import {Activity} from "./activity/activity.component";
import {ArticleList} from "./article/article-list.module";
import {ShowArticle} from "./article/showArticle..component";

export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: 'articles',  component: ArticleList , canActivate:[AuthService]},
  { path: 'articles',  component: ArticleList , canActivate:[AuthService]},
  { path: 'articles/:id',  component: ShowArticle , canActivate:[AuthService]},

  { path: 'article/new', component: NewArticle , canActivate:[AuthService]},

  { path: 'goals',  component: Goal , canActivate:[AuthService]},
  { path: 'activities',  component: Activity , canActivate:[AuthService]},

  { path: 'auth', component: Auth },
  { path: 'users',  component: UserList , canActivate:[AuthService]},
  { path: 'users/:id', component: UserShow , canActivate:[AuthService]},

  { path: 'diaries',  component: Diary , canActivate:[AuthService]},
  { path: 'diaries/:id', component: DiaryShow , canActivate:[AuthService]},



  // { path: 'diaries/new', component: NewDiary , canActivate:[AuthService]},
  { path: 'esa',  component: Esa },
  { path: 'pip',  component: Pip },

  { path: 'questions',  component: EsaCreator , canActivate:[AuthService]},



  { path: '**',    component: NoContent },

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
