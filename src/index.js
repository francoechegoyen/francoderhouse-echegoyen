import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StrictMode } from "react";
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


