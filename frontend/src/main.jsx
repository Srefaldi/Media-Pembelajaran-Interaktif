import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css'

import { BrowserRouter } from  "react-router-dom"

import ScrollToTop from './components/ScrollOnTop.jsx';

import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
