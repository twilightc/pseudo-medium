import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {
    // console.log(localStorage.getItem('token'));
  }

  ngOnInit() {}

  Logout() {
    this.user.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
