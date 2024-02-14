import React, { useState } from "react";
import "./stylesheets/Documents.css";
import Upload from "./images/upload.svg";

function Document() {
  // State to manage license file, license expiry date, and BGV file
  const [licenseFile, setLicenseFile] = useState(null);
  const [licenseExpiryDate, setLicenseExpiryDate] = useState("");
  const [bgvFile, setBgvFile] = useState(null);

  // Function to handle file changes and check file size
  const handleFileChange = (file, setFile, maxSizeInMB) => {
    const fileSize = file?.size || 0; 
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

    // Check if file size exceeds the maximum allowed size
    if (fileSize > maxSizeInBytes) {
      alert(`File size should not exceed ${maxSizeInMB} MB.`);
      setFile(null);
    } else {
      setFile(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Form data object
    const formData = {
      licenseFile,
      licenseExpiryDate,
      bgvFile,
    };

    // Convert form data to JSON format and log it
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  // Function to handle form reset
  const handleReset = () => {
    // Reset all form fields
    setLicenseFile(null);
    setLicenseExpiryDate("");
    setBgvFile(null);
  };

  return (
    <>
      <div className="Documents">
        <div className="Documents_inner">
          {/* License Information Section */}
          <h3>License Information</h3><br></br>
          <form>
            <label htmlFor="licenseFile"><b>License :</b> </label>
            <input
              type="file"
              id="licenseFile"
              accept=".txt, .pdf"
              onChange={(e) =>
                handleFileChange(e.target.files[0], setLicenseFile, 2)
              }
            />
            <br />
            <label htmlFor="expiryDate"><b>License Expiry Date:</b></label>
            <input
              type="date"
              id="expiryDate"
              value={licenseExpiryDate}
              onChange={(e) => setLicenseExpiryDate(e.target.value)}
              required
            />
          </form>

          {/* BGV Certificate Information Section */}
          <h3>BGV Certificate Information</h3><br></br>
          <form>
            <label htmlFor="bgvFile"><b>BGV Certificate:</b></label>
            <input
              type="file"
              id="bgvFile"
              accept=".txt, .pdf"
              onChange={(e) =>
                handleFileChange(e.target.files[0], setBgvFile, 2)
              }
            />
          </form>

          {/* Save and Reset Buttons */}
          <div className="buttonsD">
            <button type="button" id="submit_buttonD" onClick={handleSubmit}>
              Save
            </button>
            <button type="reset" id="reset_buttonD" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {/* Upload Image */}
        <div className="upload">
          <img src={Upload} alt="upload documents"></img>
        </div>
      </div>
    </>
  );
}

export default Document;
