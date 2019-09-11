import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  public article = {
    text: ''
  };
  titlevalue = '';
  constructor() {}

  ngOnInit() {}
}
