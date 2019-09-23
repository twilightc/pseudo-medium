import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseResponse, Article } from '../Models/Models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  storyBeingRead: Article;
  storybeingEdited = new Article();

  constructor(private httpclient: HttpClient) {}

  getArticles() {
    return this.httpclient.get<BaseResponse<Article[]>>(
      `${environment.apiUrl}Story/GetArticle`
    );
  }
  getMyArticles() {
    return this.httpclient.get<BaseResponse<Article[]>>(
      `${environment.apiUrl}Story/GetMyArticle`
    );
  }
  editArticle(model: Article) {
    return this.httpclient.put<BaseResponse<string>>(
      `${environment.apiUrl}Story/EditArticle`,
      model
    );
  }
}
