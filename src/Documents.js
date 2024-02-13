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

  return (
    <>
      <div className="Documents">
        <div className="Documents_inner">
          <b>License Information</b>
          <form>
            <label htmlFor="licenseFile"> License :</label>
            <input
              type="file"
              id="licenseFile"
              accept=".txt, .pdf"
              onChange={(e) =>
                handleFileChange(e.target.files[0], setLicenseFile, 2)
              }
            />
            <br />
            <label htmlFor="expiryDate">License Expiry Date:</label>
            <input
              type="date"
              id="expiryDate"
              value={licenseExpiryDate}
              onChange={(e) => setLicenseExpiryDate(e.target.value)}
              required
            />
          </form>

          <b>BGV Certificate Information</b>
          <form>
            <label htmlFor="bgvFile">BGV Certificate:</label>
            <input
              type="file"
              id="bgvFile"
              accept=".txt, .pdf"
              onChange={(e) =>
                handleFileChange(e.target.files[0], setBgvFile, 2)
              }
            />
          </form>

          <button type="button" id="submit_button"onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Document;
