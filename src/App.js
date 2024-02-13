import React, { useState } from 'react';
import './stylesheets/App.css';
import logo from "./images/logo.png";
import PersonalPage from './Personal'; 
import DocumentsPage from './Documents';

function App() {
  const [selectedPage, setSelectedPage] = useState('Personal');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      <div className="App">
        <div className="App_inner">
          <img src={logo} alt="logo" id='moveinsync_logo' />
          <div className="profile">
            <div className="profile_heading">
              <div className="heading">
                <h1>Employee Profile</h1>
                Some info may be visible to others
              </div>
              <div className="buttons">
                <button id="Save_button" type="submit">Save</button>
                <button id="Reset_button" type="reset">Reset</button>
              </div>
            </div>
            <div className="form_outer">
              <div className="choices">
                <div className="choices_inner">
                  <div
                    id="Personal"
                    onClick={() => handlePageChange('Personal')}
                    className={selectedPage === 'Personal' ? 'active' : ''}
                  >
                    <span style={{ color: selectedPage === 'Personal' ? 'blue' : 'inherit' }}>Personal</span>
                  </div>
                  <div
                    id="Documents"
                    onClick={() => handlePageChange('Documents')}
                    className={selectedPage === 'Documents' ? 'active' : ''}
                  >
                    <span style={{ color: selectedPage === 'Documents' ? 'blue' : 'inherit' }}>Documents</span>
                  </div>
                </div>
              </div>
              <div className="page-content">
                {selectedPage === 'Personal' && <PersonalPage />}
                {selectedPage === 'Documents' && <DocumentsPage />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
