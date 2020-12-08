import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../shared/Services/api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  apiResponse: Observable<string>;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  login() {
    this.authService.login('/tabs/default');
  }
  logout() {
    this.authService.logout();
  }
  get idToken() {
    return this.authService.idToken;
  }
}
