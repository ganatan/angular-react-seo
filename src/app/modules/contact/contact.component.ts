import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-starter : Titre de la page Contact');
    this.meta.addTag({
      name: 'author',
      content: 'chendra'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'angular-starter : Description de la page Contact'
      });
  }

}