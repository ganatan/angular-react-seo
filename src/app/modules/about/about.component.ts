import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('This the title of the About few words to describe it');

    meta.addTags([
      {
        name: 'author', content: 'chendra'
      },
      {
        name: 'description', content: 'This is the About page description 120 characters are needed for a good SEO.'
      },
    ]);

  }

  ngOnInit() {
  }

}
