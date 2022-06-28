import React from 'react';
import { Link } from "react-router-dom";

import './home.css';
import SeoService from '../../../services/seo/seo-service';

import { environment } from '../../../../environments/environment';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.name = environment.application.name;
    this.version = environment.application.version;
    this.bootstrap = environment.application.bootstrap;
    this.fontawesome = environment.application.fontawesome;

  }

  render() {

    const features =
      [
        {
          name: 'Bootstrap',
          description: 'How to use Buttons, Alerts, Pagination, Tables, Collapses',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap'
        },
        {
          name: 'Components',
          description: 'Channel component with Input, Output and Event Emitter',
          icon: 'far fa-clone',
          link: 'components'
        },
        {
          name: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          icon: 'fas fa-handshake',
          link: 'services'
        },
        {
          name: 'Reactive Forms',
          description: 'A model-driven approach to handling form inputs',
          icon: 'far fa-file-alt',
          link: 'forms'
        },
        {
          name: 'Template Driven',
          description: 'Forms are the mainstay of business applications',
          icon: 'far fa-file-alt',
          link: 'forms'
        },
      ];

    function Item(props) {

      const iconclass = props["feature"].icon + " fa-lg text-primary";

      return <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
        <div className="nga-card bg-light mb-3">
          <Link to={props.feature.link}>
            <div className="card-header">
              <div className="row">
                <div className="col-10 col-xl-10">
                  <h4 className="card-title h5">{props.feature.name}</h4>
                </div>
                <div className="col-2 col-xl-2">
                  <i className={iconclass}></i>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{props.feature.description}</p>
            </div>
          </Link>
        </div>
      </div>;

    }

    const content =
      'This application was developed with ' + this.version + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'react-seo - Title - Home Page';

    return (
      <div>
        <SeoService content={content} title={title}></SeoService>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center mb-2">
              <h1 className="h5">
                <i className="fas fa-laptop fa-lg me-2 text-primary"></i>
                {this.name}
                <i className="fas fa-mobile-alt fa-lg ms-2 text-primary"></i>
              </h1>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-dark mb-2">
              <h2 className="h5">
                {this.version}<i className="fab fa-react fa-lg ms-2"></i>
              </h2>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-primary mb-2">
              <h2 className="h5">
                {this.bootstrap}<i className="fab fa-bootstrap fa-lg ms-2"></i>
              </h2>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-success mb-2">
              <h2 className="h5">
                {this.fontawesome}<i className="fab fa-font-awesome-flag fa-lg ms-2"></i>
              </h2>
            </div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-12 text-center mb-4">
              <h3 className="h5">Features<i className="fas fa-list ms-2"></i></h3>
            </div>
          </div>
          <div className="row pt-2">
            {features.map((feature) => <Item key={feature.name} feature={feature} />)}
          </div>
        </div >
      </div>
    )
  }

}

export default Home; 
