import './App.css';
import logo from "./images/logo.png"

function App() {
  return (
    <>
    <div className="App">
    
      <div className="App_inner">
      <img src={logo} alt="logo" id='moveinsync_logo'/>
      <div className="profile">
        <div className="profile_heading">
          <div className="heading"><h1>Employee Profile</h1></div>
          <div className="buttons">
            <button id="Save_button" type="submit">Save</button>
            <button id="Reset_button" type="reset">Reset</button>
          </div>
        </div>
      </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
