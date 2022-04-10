import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: {
    userId?: number;
    fullName?: string;
    email: string;
    password: string;
  }[] = [
    { userId: 1, fullName: 'hm murad', email: 'hmm@hmm.com', password: 'hmm' },
    { userId: 2, fullName: ' murad', email: 'a@a.com', password: 'asd' },
  ];
  user$ = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) {
 
  }

  signUp(user: any) {
    this.users.push(user);
    return of(this.users);
  }

  login(user: any) {
    let loggedUser = this.users.find(
      (savedUser) =>
        savedUser.email === user.email && savedUser.password === user.password
    );
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    this.user$.next(loggedUser)
    return of(loggedUser);
  }

  logout() {
    this.user$.next('')
    localStorage.removeItem('loggedUser')
    this.router.navigate(['/auth/sign-up'])
  }
}
