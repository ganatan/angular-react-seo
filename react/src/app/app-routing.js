import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './modules/general/home/home';
import Notfound from './modules/general/not-found/not-found';

const About = React.lazy(() => import('./modules/general/about/about'));
const Login = React.lazy(() => import('./modules/general/login/login'));
const Signup = React.lazy(() => import('./modules/general/signup/signup'));

const Contact = React.lazy(() => import('./modules/general/contact/contact'));

const ExampleBootstrap = React.lazy(() => import('./modules/application/example-bootstrap/example-bootstrap'));
const ExampleComponents = React.lazy(() => import('./modules/application/example-components/example-components'));
const ExampleForms = React.lazy(() => import('./modules/application/example-forms/example-forms'));
const ExampleServices = React.lazy(() => import('./modules/application/example-services/example-services')); 

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about/*" element={<Suspense fallback={<>...</>}><About /></Suspense>} />
        <Route path="login/*" element={<Suspense fallback={<>...</>}><Login /></Suspense>} />
        <Route path="signup/*" element={<Suspense fallback={<>...</>}><Signup /></Suspense>} />

        <Route path="contact/*" element={<Suspense fallback={<>...</>}><Contact /></Suspense>} />
        <Route path="bootstrap/*" element={<Suspense fallback={<>...</>}><ExampleBootstrap /></Suspense>} />
        <Route path="components/*" element={<Suspense fallback={<>...</>}><ExampleComponents /></Suspense>} />
        <Route path="forms/*" element={<Suspense fallback={<>...</>}><ExampleForms /></Suspense>} />
        <Route path="services/*" element={<Suspense fallback={<>...</>}><ExampleServices /></Suspense>} />

        <Route path="*" element={<Notfound />} />

      </Routes >)
  }

}

export default AppRouting;