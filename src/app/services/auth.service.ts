import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URi: string = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  registerUser(user): Observable<User> {
    return this.http.post<User>(this.URi + 'api/auth/register', user, httpOptions);
  }

  loginUser(user): Observable<any> {
    return this.http.post(this.URi + 'api/auth/login', user, httpOptions);
  }
}
