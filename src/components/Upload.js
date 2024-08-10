// src/Upload.js

import React, { useState } from 'react';
import './Upload.css'; // Create this CSS file for styling

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }
    // Here, you would normally handle file upload with an API
    alert('File uploaded successfully');
  };

  return (
    <div className='upload-container'>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit} className='upload-form'>
        <div className='form-group'>
          <input
            type='file'
            onChange={handleFileChange}
            className='file-input'
          />
        </div>
        <button type='submit' className='submit-btn'>
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
