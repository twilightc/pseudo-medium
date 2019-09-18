import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/Services/authGuard.service';
import { AccountModel } from 'src/app/Models/Models';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  AccountModel = new AccountModel();
  asd: AccountModel = { Account: 'fwefw', Password: '123' };
  constructor(
    private router: Router,
    private loginservice: UserService,
    private authguard: AuthGuard
  ) {
    console.log(this.AccountModel);
  }

  ngOnInit() {}

  Login() {
    this.loginservice.Login(this.AccountModel).subscribe(response => {
      // console.log(response);

      if (response.Success) {
        this.loginservice.isLoggedIn = true;
        localStorage.setItem('token', response.Data);
        this.router.navigate(['/yourstory']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  Logout(): void {
    // this.isLoggedIn = false;
    // RegisterService.JWTToken = '';
  }
}
