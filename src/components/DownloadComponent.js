// / frontend/src/components/DownloadComponent.js
import React from 'react';
import axios from 'axios';

const DownloadComponent = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:5000/download', {
        responseType: 'blob', // Important for downloading files
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'example.txt'); // Set the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading the file:', error);
      // Add additional error handling logic here
    }
  };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col md-3'>
        <div class="card" style={{width:'400px',height:'600px'}}>
  <img src="/img.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body" style={{display:'grid'}}>
    <h5 class="card-title">DOWNLOAD</h5>
    <p class="card-text">Click here to download one file from python website </p>
    <button onClick={handleDownload}>Download File</button>
    </div>

  </div>
</div>
<div className='col md-3'><h1>DOWNLOAD FILE</h1><p style={{fontSize:'2rem',textAlign:'center'}}><b>Detailed Description : </b>
This component is part of a React application that interacts with a Python Flask backend. When the "Download File" button is clicked, the component sends a GET request to the backend to fetch a file. The file is then presented to the user for download, utilizing modern JavaScript techniques to handle binary data and initiate the download process in the 
browser.</p></div>
 </div> </div>
  );
};

export default DownloadComponent;