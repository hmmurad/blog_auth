import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignup() {
    if(!this.signUpForm.valid) {
      return ;
    }
    console.log(this.signUpForm.value)
    this.userService.signUp(this.signUpForm.value).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
