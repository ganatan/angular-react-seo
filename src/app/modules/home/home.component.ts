import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('This the title of the home few words to describe it');

    meta.addTags([
      {
        name: 'author', content: 'chendra'
      },
      {
        name: 'description', content: 'This is the home page description 120 characters are needed for a good SEO.'
      },
    ]);

  }

  ngOnInit() {
  }

}
