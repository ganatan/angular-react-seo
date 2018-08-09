import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('This the title of the Contact few words to describe it');

    meta.addTags([
      {
        name: 'author', content: 'chendra'
      },
      {
        name: 'description', content: 'This is the Contact page description 120 characters are needed for a good SEO.'
      },
    ]);

  }

  ngOnInit() {
  }

}
