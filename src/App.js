import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from "./router/AppRoute";
import '../src/asset/css/bootstrap.min.css';
import '../src/asset/css/custom.css';

function App() {
  return (
      <BrowserRouter>
          <AppRoute/>
      </BrowserRouter>
  );
}

export default App;
