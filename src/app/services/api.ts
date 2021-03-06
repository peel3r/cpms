import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });
  apiUrl: string =  'http://localhost:3030' //'https://cpms-api.herokuapp.com' //

  constructor(private http: Http) {}

  private getJson(response: Response) {
    return response.json();
  }

  private checkForError(response: Response): Response | Observable<any> {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error['response'] = response;
      throw error;
    }
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, { headers: this.headers })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  post(path: string, body): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
      .map(this.checkForError)
      .catch(err => Observable.throw(err._body))
      .map(this.getJson);
  }

  put(path: string, body): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
      .map(this.checkForError)
      .catch(err => Observable.throw(err._body))
      .map(this.getJson);
  }


  delete(path): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${path}`,
      { headers: this.headers }
    )
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  setHeaders(headers) {
    Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
  }
}
