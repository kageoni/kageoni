import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {SessionStorageService} from "./session-storage.service";
import {config} from "../config/config";

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private router: Router, private storage: SessionStorageService) {
  }

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');

    return this.checkAuthentication();
  }

  checkAuthentication(): boolean {
    let auth = this.storage.get(config.login.tokenName);
    if (auth) {
      return true;
    }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);

    return false;
  }

}
