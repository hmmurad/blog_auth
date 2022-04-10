import { Component, ElementRef, HostBinding, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  currentUser: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.logout()
    this.userService.user$.subscribe(
      user => {
        if(user) {
          this.currentUser = user
        }

      }
    )

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logout()
  }



  logout() {
    this.userService.logout()
  }


}
