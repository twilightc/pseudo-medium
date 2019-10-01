import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseResponse, Article } from '../Models/Models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  storyBeingRead: Article;
  storybeingEdited = new Article();
  isNewStory = false;

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

  getMyArticleByUid(uid: string) {
    console.log(uid);

    return this.httpclient.get<BaseResponse<Article>>(
      `${environment.apiUrl}Story/GetMyArticleByUid?uid=${uid}`
    );
  }

  editArticle(model: Article) {
    return this.httpclient.put<BaseResponse<string>>(
      `${environment.apiUrl}Story/EditArticle`,
      model
    );
  }

  deleteArticle(model: Article) {
    return this.httpclient.post<BaseResponse<string>>(
      `${environment.apiUrl}Story/DeleteArticle`,
      model
    );
  }
}
