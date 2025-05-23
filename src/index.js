import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'app';
import { AppProviders } from 'context';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto/300.css';
import 'fontsource-roboto/400.css';
import 'fontsource-roboto/500.css';
import 'fontsource-roboto/700.css';

render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function    
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();
