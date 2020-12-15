import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { SettingService } from './setting.service';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private settingservice: SettingService,
    private authservice: AuthService
  ) {}

  get DefaultOption() {
    return {
      headers: { Authorization: 'Bearer ' + this.authservice.idToken },
    };
  }
  get(path: string): Observable<any> {
    return this.http.get(
      this.settingservice.apiBathPath + path,
      this.DefaultOption
    );
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(
      this.settingservice.apiBathPath + path,
      this.DefaultOption
    );
  }
}
