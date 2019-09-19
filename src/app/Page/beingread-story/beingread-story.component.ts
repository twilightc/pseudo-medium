import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { Article } from 'src/app/Models/Models';

@Component({
  selector: 'app-beingread-story',
  templateUrl: './beingread-story.component.html',
  styleUrls: ['./beingread-story.component.scss']
})
export class BeingreadStoryComponent implements OnInit {
  public currentReadArticle = new Article();
  constructor(private articleservice: ArticleService) {}

  ngOnInit() {
    this.currentReadArticle = this.articleservice.storyBeingRead;
  }
}
