import React from 'react';
import { Link } from 'react-router-dom';

import ExampleServicesRouting from './example-services-routing';

import './example-services.css';
import SeoService from '../../../services/seo/seo-service';

class ExampleServices extends React.Component {
  render() {

    const content = 'react-seo - Description - example-services Page';
    const title = 'react-seo - Title - example-services Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div id="example-services">
          <ul>
            <li><Link to="main">main</Link></li>
            <li><Link to="accordions">accordions</Link></li>
            <li><Link to="alerts">alerts</Link></li>
          </ul>
          <h4>example-services</h4>
          <ExampleServicesRouting />
        </div>
      </div>
    )
  }
}

export default ExampleServices;
