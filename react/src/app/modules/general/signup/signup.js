import React from 'react';

import './signup.css';
import Seo from '../../../components/seo/seo';

class Signup extends React.Component {

  render() {

    const content = 'react-seo - Description - Signup Page';
    const title = 'react-seo - Title - Signup Page';

    return (
      <div>
        <Seo content={content} title={title}></Seo>
        <div className="container py-5">
          <p className="text-center">signup works!</p>
        </div>
      </div>
    )
  }

}
export default Signup; 
