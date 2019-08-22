import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private readonly http: HttpClient) {}

  public createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }
}
