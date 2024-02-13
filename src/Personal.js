import React, { useState } from "react";
import "./stylesheets/Personal.css";
import Ride from "./images/ride.svg";

const countries = ["INDIA","USA", "Canada", "UK", "Australia","Germany", "France", "Japan", "Brazil"];
const NotificationPreferences = ["Email", "SMS", "Push Notification"];

const Personal= () => {
    const [selectedPage, setSelectedPage] = useState('Personal');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: countries[0],
    gender: "",
    phone: "",
    notificationPreferences: [], 
    office: " MIS - Bengaluru Headquarters",
    team: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedPreferences = checked
        ? [...formData.notificationPreferences, value]
        : formData.notificationPreferences.filter((preference) => preference !== value);

      setFormData((prevData) => ({
        ...prevData,
        notificationPreferences: updatedPreferences,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
const handleReset = () => {
  setFormData({
    name: "",
    email: "",
    country: countries[0],
    gender: "",
    phone: "",
    notificationPreferences: [],
    office: " MIS - Bengaluru Headquarters",
    team: "",
  });
};


  return (
    <>
      <div className="form-outer">
        <div className="form-inner">
          <form onSubmit={handleSubmit}>
            <div className="lable_name">
          <label >
          <b>Name:</b>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        </div>
        <div>
        <label><b>Email:</b>
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label></div>
        <div>

        <label ><b>Country:</b>
          
          <select id="countries"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        </div>

        <div className="gender">
            <label className="gender_lable"><b>Gender:</b></label>

          <label className="gender_male">
            <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange}/>Male</label>

          <label className="gender_female">
            <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange}/>Female</label>
            </div>
        <label>
        <b> Phone Number:</b>
         
          <input id="number"
            type="tel"
            name="phone"
            placeholder="1234567890"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
            
            <label className="Notifications"> <b> Notification Preferences:</b>
             
              {NotificationPreferences.map((preference) => (
                <div key={preference}>

                  <label className="Preferences">
                    <input
                      type="checkbox"
                      name="notificationPreferences"
                      value={preference}
                      checked={formData.notificationPreferences.includes(preference)}
                      onChange={handleChange}
                    />
                    {preference}
                  </label>
                </div>
              ))}
            </label>
            <div className="Office">
            <lable><b>Office: MIS - Bengaluru Headquarters</b></lable>
            </div>

            <div className="Team">
            <lable><b>Team:</b><input type="text" name="team" placeholder="Font End - Engineering"value={formData.team} onChange={handleChange}></input></lable>
            </div>

            
            <div className="buttons">
            <button type="submit" id="submit_button">Save</button>
            <button type="reset" id="reset_button" onClick={handleReset}>Reset</button>
              </div>
            
            <div className="ride">
                <img src={Ride} alt="ride"></img>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Personal;
