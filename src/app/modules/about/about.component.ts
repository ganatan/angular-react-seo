import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-starter : Titre de la page About');
    this.meta.addTag({
      name: 'author',
      content: 'chendra'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'angular-starter : Description de la page About'
      });
  }

}