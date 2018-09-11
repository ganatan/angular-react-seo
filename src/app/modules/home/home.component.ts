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
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-starter : Titre de la page Home');
    this.meta.addTag({
      name: 'author',
      content: 'chendra'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'angular-starter : Description de la page Home'
      });
  }

}