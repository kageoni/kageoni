import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

  constructor() { }

  set(key : string, value: string) {
    sessionStorage.setItem(key,value);

    return this;
  }

  get(key:string) {
    return sessionStorage.getItem(key);
  }

  clear(){
    sessionStorage.clear();

    return this;
  }
}
