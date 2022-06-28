import React from 'react';
import { Link } from 'react-router-dom';

import ExampleComponentsRouting from './example-components-routing';

import './example-components.css';

class ExampleBootstrap extends React.Component {
  render() {
    return (
      <div id="example-components">
        <ul>
          <li><Link to="main">main</Link></li>
          <li><Link to="accordions">accordions</Link></li>
          <li><Link to="alerts">alerts</Link></li>
        </ul>
        <h4>example-components</h4>
        <ExampleComponentsRouting />
      </div>
    )
  }
}

export default ExampleBootstrap;
