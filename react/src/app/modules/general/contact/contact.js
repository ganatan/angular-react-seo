import React from 'react';
import { Link } from 'react-router-dom';

import ContactRouting from './contact-routing';

import './contact.css';
import SeoService from '../../../services/seo/seo-service';

class Contact extends React.Component {

  render() {

    const content = 'react-seo - Description - Contact Page';
    const title = 'react-seo - Title - Contact Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div className="container py-5">
          <p>contact works!</p>
          <ul>
            <li><Link to="mailing">Mailing</Link></li>
            <li><Link to="mapping">Mapping</Link></li>
            <li><Link to="website">Website</Link></li>
          </ul>
          <h4>Child Routes Result</h4>
          <ContactRouting />
        </div>
      </div>
    )
  }

}
export default Contact; 
