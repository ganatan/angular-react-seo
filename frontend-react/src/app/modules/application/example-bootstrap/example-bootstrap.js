import React from 'react';
import { Link } from 'react-router-dom';

import ExampleBootstrapRouting from './example-bootstrap-routing';

import './example-bootstrap.css';
import Seo from '../../../components/seo/seo';

class ExampleBootstrap extends React.Component {
  render() {

    const content = 'react-seo - Description - example-bootstrap Page';
    const title = 'react-seo - Title - example-bootstrap Page';

    return (
      <div>
        <Seo content={content} title={title}></Seo>
        <div id="example-bootstrap">
          <ul>
            <li><Link to="main">main</Link></li>
            <li><Link to="accordions">accordions</Link></li>
            <li><Link to="alerts">alerts</Link></li>
          </ul>
          <h4>ExampleBootstrapRouting</h4>
          <ExampleBootstrapRouting />
        </div>
      </div>
    )
  }
}

export default ExampleBootstrap;
