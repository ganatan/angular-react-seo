import React from 'react';

import './about.css';
import SeoService from '../../../services/seo/seo-service';

class About extends React.Component {
  render() {

    const content = 'react-seo - Description - About Page';
    const title = 'react-seo - Title - About Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div className="container py-5">
          <p className="text-center">about works!</p>
        </div>
      </div>
    )

  }
}

export default About;
