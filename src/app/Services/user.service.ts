import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  RegisterModel,
  BaseResponse,
  AccountModel,
  ArticleModel
} from '../Models/Models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpclient: HttpClient) {}
  // public static JWTToken = '';
  isLoggedIn = false;
  redirectUrl: string;
  Register(model: RegisterModel) {
    return this.httpclient.post<BaseResponse<string>>(
      `${environment.apiUrl}Auth/Register`,
      model
    );
  }
  Login(model: AccountModel) {
    return this.httpclient.post<BaseResponse<string>>(
      `${environment.apiUrl}Auth/Login`,
      model
    );
  }

  Publish(model: ArticleModel) {
    console.log(`​${environment.apiUrl}Story​/Publish`);

    return this.httpclient.post<BaseResponse<string>>(
      `${environment.apiUrl}Story/Publish`,
      model
    );
  }
}
