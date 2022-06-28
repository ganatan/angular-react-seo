import React from 'react';
import { Link } from 'react-router-dom';

import ExampleFormsRouting from './example-forms-routing';

import './example-forms.css';

class ExampleForms extends React.Component {
  render() {
    return (
      <div id="example-forms">
        <ul>
          <li><Link to="main">main</Link></li>
          <li><Link to="accordions">accordions</Link></li>
          <li><Link to="alerts">alerts</Link></li>
        </ul>
        <h4>example-forms</h4>
        <ExampleFormsRouting />
      </div>
    )
  }
}

export default ExampleForms;
