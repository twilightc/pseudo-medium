import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserService } from 'src/app/Services/user.service';
import { ArticleModel } from 'src/app/Models/Models';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  publish() {
    this.userService.Publish(this.ArticleModel).subscribe(response => {
      if (response.Success) {
        console.log(`uid:${response.Data}`);
        this.router.navigate(['yourstory']);
      }
    });
  }
}
