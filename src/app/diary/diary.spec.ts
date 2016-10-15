import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { Diary } from './diary.component';
import { Title } from './title';

describe('Diary', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      Title,
      Diary
    ]
  }));

  it('should have default data', inject([ Diary ], (diary: Diary) => {
    expect(diary.localState).toEqual({ value: '' });
  }));

  it('should have a title', inject([ Diary ], (diary: Diary) => {
    expect(!!diary.title).toEqual(true);
  }));

  it('should log ngOnInit', inject([ Diary ], (diary: Diary) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    diary.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
