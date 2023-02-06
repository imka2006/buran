import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./18n"

import "./index.scss";
import "macro-css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

