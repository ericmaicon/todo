import React from 'react';
import { GraphqlFactory } from '../src/factory';
import './style.css';

function App({ Component, pageProps }) {
  GraphqlFactory.connect();

  return (
    <Component {...pageProps} />
  );
}

export default App;
