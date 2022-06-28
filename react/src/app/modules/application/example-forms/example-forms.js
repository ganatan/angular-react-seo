import React from 'react';
import { Link } from 'react-router-dom';

import ExampleFormsRouting from './example-forms-routing';

import './example-forms.css';
import SeoService from '../../../services/seo/seo-service';

class ExampleForms extends React.Component {
  render() {

    const content = 'react-seo - Description - example-forms Page';
    const title = 'react-seo - Title - example-forms Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div id="example-forms">
          <ul>
            <li><Link to="main">main</Link></li>
            <li><Link to="accordions">accordions</Link></li>
            <li><Link to="alerts">alerts</Link></li>
          </ul>
          <h4>example-forms</h4>
          <ExampleFormsRouting />
        </div>
      </div>
    )
  }
}

export default ExampleForms;
