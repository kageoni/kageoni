import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Response, Http, Headers, RequestOptions } from "@angular/http";
import { environment } from "../../environments/environment";
import { config } from "../config/config";

@Injectable()
export class ApiService {
  options: RequestOptions;

  constructor(private http: Http) {
    let headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: headers, withCredentials: true});
  }

  login(user: string, password: string): Observable<any> {
    let payload = {user: user, password: password};

    return this.post(config.api.login, payload);
  }

  getCategories(): Observable<any> {
    return this.get(config.api.categories);
  }

  getUsers(): Observable<any> {
    return this.get(config.api.users);
  }

  getGames(): Observable<any> {
    return this.get(config.api.games);
  }

  private post(url: string, payload: any) {
    console.log('environment.mock', environment.mock);
    if (environment.mock) {
      return this.get(url);
    }

    return this.http.post(url, payload, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private get(url: string) {
    return this.http.get(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    console.log('bbbbb');
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);

    return Observable.throw(errMsg);
  }

}
