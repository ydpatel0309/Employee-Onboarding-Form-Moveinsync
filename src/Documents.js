import React, { useState } from "react";
import "./stylesheets/Documents.css";

function Document() {
  const [licenseFile, setLicenseFile] = useState(null);
  const [licenseExpiryDate, setLicenseExpiryDate] = useState("");
  const [bgvFile, setBgvFile] = useState(null);

  const handleFileChange = (file, setFile, maxSizeInMB) => {
    const fileSize = file?.size || 0;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

    if (fileSize > maxSizeInBytes) {
      alert(`File size should not exceed ${maxSizeInMB} MB.`);
      setFile(null);
    } else {
      setFile(file);
    }
  };

  const handleSubmit = () => {
    const formData = {
      licenseFile,
      licenseExpiryDate,
      bgvFile,
    };

    // Convert form data to JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
  };

  //handeling the reset button
  const handleReset = () => {
    setLicenseFile(null);
    setLicenseExpiryDate("");
    setBgvFile(null);
  };

  return (
    <>
      <div className="Documents">
        <div className="Documents_inner">
          <h3>License Information</h3>
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

          <h3>BGV Certificate Information</h3>
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

          <button type="button"id="submit_button" onClick={handleSubmit}>
          Save
          </button>
          <button type="reset" id="reset_button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Document;
