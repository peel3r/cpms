import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Article {
  title: string,
  text: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

export interface State {
  notes: Array<Article>
}

const defaultState = {
  articles: []
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable().distinctUntilChanged()

  setState(state: State) {
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}
