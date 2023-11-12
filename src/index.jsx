import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import 'normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/great-react">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
