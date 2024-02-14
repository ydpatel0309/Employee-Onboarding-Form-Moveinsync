import React, { useState } from "react";
import "./stylesheets/Personal.css";
import Ride from "./images/ride.svg";

// List of countries and notification preferences
const countries = ["INDIA", "USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "Brazil","London", "France", "China", "Russia"]; 
const NotificationPreferences = ["Email", "SMS", "Push Notification"];

const Personal = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: countries[0],
    gender: "",
    phone: "",
    notificationPreferences: [],
    office: "MIS - Bengaluru Headquarters",
    team: "",
  });

  // Handling changes in form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Update notification preferences for checkboxes
      const updatedPreferences = checked
        ? [...formData.notificationPreferences, value]
        : formData.notificationPreferences.filter((preference) => preference !== value);

      setFormData((prevData) => ({
        ...prevData,
        notificationPreferences: updatedPreferences,
      }));
    } else {
      // Update other form fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data on submission
    console.log(formData);
  };

  // Handling form reset
  const handleReset = () => {
    // Reset form data to default values
    setFormData({
      name: "",
      email: "",
      country: countries[0],
      gender: "",
      phone: "",
      notificationPreferences: [],
      office: "MIS - Bengaluru Headquarters",
      team: "",
    });
  };

  return (
    <>
      <div className="form-outer">
        <div className="form-inner">
          <form onSubmit={handleSubmit}>
            {/* Name field */}
            <div className="label_name">
              <label>
                <b>Name:</b>
                <input
                  type="text"
                  name="name"
                  placeholder="Firstname Lastname"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Email field */}
            <div>
              <label>
                <b>Email:</b>
                <input
                  type="email"
                  name="email"
                  placeholder="@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Country field */}
            <div>
              <label>
                <b>Country:</b>
                <select
                  id="countries"
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

            {/* Gender choice */}
            <div className="gender">
              <label className="gender_label">
                <b>Gender:</b>
              </label>

              <label className="gender_male">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  required
                />
                Male
              </label>

              <label className="gender_female">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  required
                />
                Female
              </label>
            </div>

            {/* Phone number */}
            <label>
              <b> Phone Number:</b>
              <input
                id="number"
                type="tel"
                name="phone"
                placeholder="1234567890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            {/* Notification Preferences */}
            <label className="Notifications">
              <b> Notify:</b>
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

            {/* Office field */}
            <div className="Office">
              <label>
                <b>Office: MIS - Bengaluru Headquarters</b>
              </label>
            </div>

            {/* Team field */}
            <div className="Team">
              <label>
                <b>Team:</b>
                <input
                  type="text"
                  name="team"
                  placeholder="Front End - Engineering"
                  value={formData.team}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="buttons">
              <button type="submit" id="submit_button">
                Save
              </button>
              <button type="reset" id="reset_button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>

          <div className="ride">
            <img src={Ride} alt="ride"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
