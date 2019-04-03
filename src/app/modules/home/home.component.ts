import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Angular-ganatan : Une application Progressive WebApp développée avec Angular');
    this.meta.addTag({
      name: 'angular-webapp',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec angular version 7.2.11 et bootstrap ' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
