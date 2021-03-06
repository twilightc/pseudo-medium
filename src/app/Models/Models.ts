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

export class ArticleModel {
  ArticleTitle = '';
  ArticleContent = '';
}

export class BaseResponse<T> {
  Success: boolean;
  Msg: string;
  Data: T;
}

export class Article {
  ArticleTitle = '';
  ArticleContent = '';
  Account = '';
  Uid = '';
  Date: Date;
}
