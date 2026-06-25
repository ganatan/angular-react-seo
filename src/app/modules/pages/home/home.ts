import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../../core/services/seo/seo.service';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  constructor(private seoService: SeoService) {

    const content =
      'This application was developed with ' + this.version + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-starter Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
