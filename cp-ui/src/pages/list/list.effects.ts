import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';

const actions = {
    LOGIN: 'Login',
    LOGIN_SUCCESS: 'login success',
    LOGIN_FAILED: 'login failed'
}


@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect() login$: any = 'string';
  

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) {
    Object.keys(actions).forEach((item) => {
        Effect()(this, item)
        Object.defineProperty(this, item, {
            value: actions[item]
        });
    });
  }
}
