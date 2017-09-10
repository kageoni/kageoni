import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {config} from "../../config/config";
import {SessionStorageService} from "../../services/session-storage.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  password: string;
  user: string;
  errorMessage: string;

  constructor(private router: Router, private auth: AuthService,
              private storage: SessionStorageService, private api: ApiService) {
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit(): void {
    console.log('authenticate: ', this.user, this.password);
    this.login();
  }

  private login(): void {
    this.api.login(this.user, this.password).subscribe((result) => {
        if (result.success && result.data.token) {
          this.storage.set(config.login.tokenName, result.data.token);
          this.router.navigate(['/admin']);
        }
        else {
          this.errorMessage = result.message;
        }
      },
      (error) => {
        console.log('Error! Cannot request authentication endpoint.', error);
      });
  }

}
