import './App.css';
import logo from "./images/logo.png";

function App() {
  return (
    <>
    <div className="App">
    
      <div className="App_inner">
      <img src={logo} alt="logo" id='moveinsync_logo'/>
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
            <div id="Presonal">Presonal</div>
            <div id="Documents">Documents</div>
            </div>
          </div>
        
        </div>
      </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
