import React from 'react';
import { Routes, Route } from "react-router-dom";

import Main from './00-main/main';
import Accordions from './accordions/accordions';
import Alerts from './alerts/alerts';

import Notfound from '../../../modules/general/not-found/not-found';

class ExampleComponentsRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route index element={<Main />} />
        <Route path="*" element={<Notfound />} />
        <Route path="main/*" element={<Main />} />
        <Route path="accordions/*" element={<Accordions />} />
        <Route path="alerts/*" element={<Alerts />} />
      </Routes>
    )
  }

}

export default ExampleComponentsRouting;