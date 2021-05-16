import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


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
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: object) {
    this.features =
      [
        {
          name: 'Items',
          description: 'Items',
          icon: 'fab fa-bootstrap',
          link: 'httpclient'
        },
         {
          name: 'Bootstrap',
          description: 'Bootstrap Prototype Description',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap'
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
      ];

  }

  ngOnInit(): void {

    this.loadScript('assets/params/js/index.js');

    this.titleService.setTitle('angular.ganatan: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 11.2.10 et bootstrap 4.6.0' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }


  loadScript(name: string): void {

    if (isPlatformBrowser(this.platformId)) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = name;
      s.async = false;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }

}
