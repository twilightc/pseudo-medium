import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { Article } from 'src/app/Models/Models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beingread-story',
  templateUrl: './beingread-story.component.html',
  styleUrls: ['./beingread-story.component.scss']
})
export class BeingreadStoryComponent implements OnInit {
  public currentReadArticle = new Article();
  constructor(
    private articleservice: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.currentReadArticle = this.articleservice.storyBeingRead;
    this.route.params.subscribe(params => {
      // console.log(typeof params.id);

      this.articleservice.getMyArticleByUid(params.id).subscribe(response => {
        this.currentReadArticle = response.Data;
        // console.log(response);
      });
    });
  }

  edit() {
    this.articleservice
      .editArticle(this.currentReadArticle)
      .subscribe(response => {
        if (response.Success) {
          console.log(response.Data);
        }
      });
  }
}
