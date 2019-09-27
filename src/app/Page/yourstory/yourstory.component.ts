import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { Article, ArticleModel } from 'src/app/Models/Models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourstory',
  templateUrl: './yourstory.component.html',
  styleUrls: ['./yourstory.component.scss']
})
export class YourstoryComponent implements OnInit {
  public articleList = new Array<Article>();
  public articleContent: string;
  constructor(private articleservice: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleservice.getMyArticles().subscribe(response => {
      console.log(response);

      this.articleList = response.Data;
      console.log(this.articleList);
      // console.log(this.articleList[0].ArticleContent);
    });
  }

  transPureString(content: string) {
    return content.replace(/<[^>]*>/g, '');
  }

  toNewStory() {
    this.router.navigate(['newstory']);
  }

  toBeingReadStory(articleDate: Article) {
    this.articleservice.storyBeingRead = articleDate;
    this.router.navigate(['beingreadstory']);
  }

  editArticle(article: Article) {
    this.articleservice.storybeingEdited = article;
    this.router.navigate(['newstory']);
  }

  deleteArticle(article: Article) {
    this.articleservice.deleteArticle(article).subscribe(response => {
      console.log(response);
      this.articleservice.getMyArticles().subscribe(renewRes => {
        // console.log(renewRes);

        this.articleList = renewRes.Data;
      });
    });
  }
}
