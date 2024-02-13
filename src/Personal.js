import React, { useState } from "react";
import "./Personal.css";

const countries = ["INDIA","USA", "Canada", "UK", "Australia"];
const NotificationPreferences = ["Email", "SMS", "Push Notification"];

const Personal= () => {
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

  return (
    <>
      <div className="form-outer">
        <div className="form-inner">
          <form onSubmit={handleSubmit}>
            <div className="lable_name">
          <label >
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        </div>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Country:
          <select
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

        <div className="gender">
            <label className="gender_lable">Gender:</label>

          <label className="gender_male">
            <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange}/>Male</label>

          <label className="gender_female">
            <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange}/>Female</label>
            </div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            placeholder="1234567890"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
            
            <label className="Notifications">
              Notification Preferences:
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
            <lable>Office : <b>MIS - Bengaluru Headquarters</b></lable>
            </div>

            <div className="Team">
            <lable>Team:<input type="text" name="team" placeholder="Font End - Engineering"value={formData.team} onChange={handleChange}></input></lable>
            </div>


            <button type="submit" id="submit_button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Personal;
