import React from 'react';
import { Link } from 'react-router-dom';

import ExampleServicesRouting from './example-services-routing';

import './example-services.css';

class ExampleServices extends React.Component {
  render() {
    return (
      <div id="example-services">
        <ul>
          <li><Link to="main">main</Link></li>
          <li><Link to="accordions">accordions</Link></li>
          <li><Link to="alerts">alerts</Link></li>
        </ul>
        <h4>example-services</h4>
        <ExampleServicesRouting />
      </div>
    )
  }
}

export default ExampleServices;
