import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
    this.features =
      [
        {
          name: 'Bootstrap prototype',
          description: 'Bootstrap Prototype Description',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap-prototype'
        },
        {
          name: 'Reactive Form',
          description: 'Reactive Form Description',
          icon: 'fab fa-bootstrap',
          link: 'reactive-form'
        },
        {
          name: 'Services',
          description: 'Services Description',
          icon: 'fab fa-bootstrap',
          link: 'services'
        },
        {
          name: 'Components',
          description: 'Components Description',
          icon: 'fab fa-bootstrap',
          link: 'components'
        },
        {
          name: 'Template Driven Forms',
          description: 'Template Driven Forms Description',
          icon: 'fab fa-bootstrap',
          link: 'template-driven-forms'
        },
        {
          name: 'Items',
          description: 'Items',
          icon: 'fab fa-bootstrap',
          link: 'httpclient'
        },
      ];

  }

  ngOnInit(): void {
    this.titleService.setTitle('angular.ganatan: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 10.1.2 et bootstrap 4.5.2' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }
}
