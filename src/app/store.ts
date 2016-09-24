import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {UserList} from "./user/user-list.module";

export interface Article {
  title: string,
  text: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface UserList {
  name: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface Diary {
  title: string,
  text: string,
  overAllPainLevel: string,
  overAllMoodLevel: string,
  shoulderGridleLeftDesc: string,
  shoulderGridleLeft: string,
  shoulderGridleRightDesc: string,
  shoulderGridleRight: string,
  upperArmRight: string,
  upperArmRightDesc: string,
  upperArmLeft: string,
  upperArmLeftDesc: string,
  lowerArmRight: string,
  lowerArmRightDesc: string,
  lowerArmLeft: string,
  lowerArmLeftDesc: string,
  hipRight: string,
  hipLeft: string,
  hipLeftDesc: string,
  hipRightDesc: string,
  upperLegRight: string,
  upperLegRightDesc: string,
  upperLegLeft: string,
  upperLegLeftDesc: string,
  lowerLegRight: string,
  lowerLegRightDesc: string,
  lowerLegLeft: string,
  lowerLegLeftDesc: string,
  jawRight: string,
  jawLeft: string,
  jawLeftDesc: string,
  jawRightDesc: string,
  chest: string,
  chestDesc: string,
  neck:string,
  neckDesc:string,
  abdomen:string,
  abdomenDesc:string,
  upperBack:string,
  upperBackDesc:string,
  lowerBack:string,
  lowerBackDesc:string


  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface State {
  articles: Array<Article>,
  diaries: Array<Diary>
  users: Array<UserList>
}

const defaultState = {
  articles: [],
  diaries: [],
  users: []
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable()
    .distinctUntilChanged()
    .do(() => console.log('changes'))

  setState(state: State) {
    console.log('setState', state)
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}
