export class RegisterModel {
  Account: string;
  Password: string;
  Username: string;
  Email: string;
}

export class AccountModel {
  Account = '';
  Password = '';
}

export class BaseResponse<T> {
  success: boolean;
  msg: string;
  data: T;
}
