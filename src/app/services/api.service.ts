import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {serialize} from '../utils/serialize';

export enum RequestMethod {
  Get = 'GET',
  Head = 'HEAD',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Patch = 'PATCH'
}

@Injectable()
export class ApiService {
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  get(path: string, args?: any): Observable<any> {
    const options = {
      headers: this.headers,
      withCredentials: false
    };
    if (args) {
      options['params'] = serialize(args);
      console.log(options);
    }
    return this.http.get(path, options)
      .catch(this.checkError.bind(this));
  }

  post(path: string, args: any): Observable<any> {
    const options = {
      headers: this.headers,
      withCredentials: false
    };
    if (args) {
      options['params'] = args;
      console.log(options);
    }
    return this.http.post(path, options)
      .catch(this.checkError.bind(this));
  }


  private request(path: string, body: any, method: string, custemHeaders?: HttpHeaders): Observable<any> {
    const req = new HttpRequest(method, path, body, {
      headers: custemHeaders || this.headers,
      withCredentials: false
    });

    return this.http.request(req)
      // .filter(response => response instanceof HttpResponse)
      .map((response: HttpResponse<any>) => response.body)
      .catch(error => this.checkError(error));
  }

  // Display error if logged in, otherwise redirect to IDP
  private checkError(error: any): any {
    if (error && error.status === 401) {
      // this.redirectIfUnauth(error);
    } else {
      // this.displayError(error);
    }
    throw error;
  }

}
