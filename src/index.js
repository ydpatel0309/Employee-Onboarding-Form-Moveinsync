// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './stylesheets/index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// reportWebVitals();


import React from "react";
import './stylesheets/index.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Page404 from "./Page404"; 
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="*" element={<Page404 />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
