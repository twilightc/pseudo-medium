import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserService } from 'src/app/Services/user.service';
import { ArticleModel, Article } from 'src/app/Models/Models';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.scss']
})
export class NewStoryComponent implements OnInit {
  public Editor = ClassicEditor;
  public config = {
    placeholder: 'Tell your story...'
  };
  ArticleModel = new ArticleModel();
  BeingEditedArticle = new Article();

  constructor(
    private userService: UserService,
    private router: Router,
    private articleservice: ArticleService
  ) {}

  ngOnInit() {
    if (this.articleservice.storybeingEdited !== null) {
      this.BeingEditedArticle = this.articleservice.storybeingEdited;
    }
  }

  publish() {
    this.userService.Publish(this.ArticleModel).subscribe(response => {
      if (response.Success) {
        console.log(`uid:${response.Data}`);
        this.router.navigate(['yourstory']);
      }
    });
  }

  editFinish() {
    this.articleservice
      .editArticle(this.BeingEditedArticle)
      .subscribe(response => {
        if (response.Success) {
          console.log(response.Data);
          this.BeingEditedArticle.Uid = '';
          this.router.navigate(['yourstory']);
        }
      });
  }
}
