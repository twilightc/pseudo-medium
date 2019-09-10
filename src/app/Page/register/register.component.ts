import { Component, OnInit } from '@angular/core';
import { RegisterModel, BaseResponse } from 'src/app/Models/Models';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterModel = new RegisterModel();
  constructor(private router: Router, private registerservice: UserService) {}

  ngOnInit() {}

  register(): void {
    this.registerservice.Register(this.RegisterModel).subscribe(response => {
      // console.log('x:', response);
      // console.log('x:', response.success);
      if (response.success) {
        // console.log('yyyyyy');
        this.registerservice.isLoggedIn = true;
        localStorage.setItem('token', response.data);
        // UserService.JWTToken = response.data;
        // console.log(UserService.JWTToken);
        this.router.navigate(['/login']);
      } else {
        console.log('register failed');
      }
    });
  }
}
