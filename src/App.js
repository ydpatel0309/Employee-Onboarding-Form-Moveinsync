import React, { useState } from 'react';
import './stylesheets/App.css';
import logo from "./images/logo.png";
import PersonalPage from './Personal'; 
import DocumentsPage from './Documents';
import ProfilePic from "./images/profile.svg";

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
                <div className="profile_pic">
                <img src={ProfilePic} alt="profile_picture"></img>
                </div>
                <div>
                <h1>Employee Profile</h1>
                Some info may be visible to others
                </div>
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
                    <span style={{ color: selectedPage === 'Personal' ? 'blue' : 'inherit' }}><h3>Personal</h3></span>
                  </div>
                  <div
                    id="Documents"
                    onClick={() => handlePageChange('Documents')}
                    className={selectedPage === 'Documents' ? 'active' : ''}
                  >
                    <span style={{ color: selectedPage === 'Documents' ? 'blue' : 'inherit' }}><h3>Documents</h3></span>
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
