import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Import your main App component
import NotFound from './Page404'; // Import your custom 404 error component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Default path */}
        <Route path="/" element={<App />} />
        {/* If none of the pages match, then render NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
