import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
// import { transformError } from '../_helpers/common';

import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginData) {
    return this.http
      .post<any>(`${this.apiUrl}/auth/login/`, loginData)
      .pipe(
        map((response) => {
          if (response) {
            this.doUserLogin(response);
          }
        })
      );
  }

  signUp(userDetails) {
    return this.http.post<any>(`${this.apiUrl}/auth/register/`, userDetails);
  }

  logout(userId) {
    localStorage.removeItem('currentUser');
    localStorage.clear();
    return this.http.post<any>(`${this.apiUrl}/auth/logout/${userId}`, userId);
  }


  private doUserLogin(tokens) {
    console.log("Token ", tokens);
    localStorage.setItem('currentUser', tokens);
  }

}
