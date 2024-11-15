import React from 'react';
import { Link } from 'react-router-dom';

import ExampleComponentsRouting from './example-components-routing';

import './example-components.css';
import Seo from '../../../components/seo/seo';

class ExampleBootstrap extends React.Component {
  render() {

    const content = 'react-seo - Description - example-components Page';
    const title = 'react-seo - Title - example-components Page';

    return (
      <div>
        <Seo content={content} title={title}></Seo>
        <div id="example-components">
          <ul>
            <li><Link to="main">main</Link></li>
            <li><Link to="accordions">accordions</Link></li>
            <li><Link to="alerts">alerts</Link></li>
          </ul>
          <h4>example-components</h4>
          <ExampleComponentsRouting />
        </div>
      </div>
    )
  }
}

export default ExampleBootstrap;
