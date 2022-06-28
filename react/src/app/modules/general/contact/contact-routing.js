import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import Mailing from './mailing/mailing';

const Mapping = React.lazy(() => import('./mapping/mapping'));
const Website = React.lazy(() => import('./website/website'));

import Notfound from '../../../modules/general/not-found/not-found';

class AppRouting extends React.Component {

  render() {
    return (
      <Routes>
        <Route index element={<Mailing />} />
        <Route path="mailing/*" element={<Mailing />} />

        <Route path="mapping/*" element={<Suspense fallback={<>...</>}><Mapping /></Suspense>} />
        <Route path="website/*" element={<Suspense fallback={<>...</>}><Website /></Suspense>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    )
  }

}

export default AppRouting;