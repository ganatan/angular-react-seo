import React from 'react';

import './about.css';
import Seo from '../../../components/seo/seo';

class About extends React.Component {
  render() {

    const content = 'react-seo - Description - About Page';
    const title = 'react-seo - Title - About Page';

    return (
      <div>
        <Seo content={content} title={title}></Seo>
        <div className="container py-5">
          <p className="text-center">about works!</p>
        </div>
      </div>
    )

  }
}

export default About;
