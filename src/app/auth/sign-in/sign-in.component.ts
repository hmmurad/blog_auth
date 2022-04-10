import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  onSignIn() {
    if(!this.signInForm.value) {

      return;
    }
    this.userService.login(this.signInForm.value).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/'])
    });
  }
}
