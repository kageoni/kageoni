import {Injectable} from '@angular/core';
import {SessionStorageService} from "./session-storage.service";
import {ApiService} from "./api.service";
import {config} from "../config/config";


@Injectable()
export class AuthService {

  constructor(private storage: SessionStorageService, private api: ApiService) {
  }


  logout() {
    this.storage.clear();
  }

  isAuthenticated(): boolean {
    let result = false;
    let auth = this.storage.get(config.login.tokenName);
    if (auth) {
      result = true;
    }

    return result;
  }

}
