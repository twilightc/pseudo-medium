import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { Article } from 'src/app/Models/Models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourstory',
  templateUrl: './yourstory.component.html',
  styleUrls: ['./yourstory.component.scss']
})
export class YourstoryComponent implements OnInit {
  public articleList = new Array<Article>();

  constructor(private articleservice: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleservice.getMyArticles().subscribe(response => {
      console.log(response);

      this.articleList = response.Data;
      console.log(this.articleList);
      // console.log(this.articleList[0].ArticleContent);
    });
  }

  toNewStory() {
    this.router.navigate(['newstory']);
  }
}