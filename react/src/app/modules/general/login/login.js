import React from 'react';

import './login.css';
import SeoService from '../../../services/seo/seo-service';

class Login extends React.Component {

  render() {
    const content = 'react-seo - Description - Login Page';
    const title = 'react-seo - Title - Login Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div className="container py-5">
          <p className="text-center">login works!</p>
        </div>
      </div>
    )
  }

}
export default Login; 
