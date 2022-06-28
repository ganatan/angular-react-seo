import React from 'react';

import './signup.css';
import SeoService from '../../../services/seo/seo-service';

class Signup extends React.Component {

  render() {

    const content = 'react-seo - Description - Signup Page';
    const title = 'react-seo - Title - Signup Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div className="container py-5">
          <p className="text-center">signup works!</p>
        </div>
      </div>
    )
  }

}
export default Signup; 
