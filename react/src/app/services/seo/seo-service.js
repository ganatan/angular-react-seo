import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';

class SeoService extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <title>{this.props.title}</title>
            <meta name="description" content={this.props.content} />
          </Helmet>
        </HelmetProvider>
      </div>
    )
  }

}

export default SeoService; 
