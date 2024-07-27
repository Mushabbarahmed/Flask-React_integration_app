// frontend/src/components/PredictionComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const PredictionComponent = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handlePredict = async () => {
    try {
      const features = inputData.split(',').map(Number);
      const response = await axios.post('http://localhost:5000/predict', {
        features: features
      });
      setPrediction(response.data.prediction);
    } catch (error) {
        setPrediction("SOrry input is not correct")
      console.error('Error making prediction:', error);
      // Add additional error handling logic here
    }
  };
  

  return (
    <div className='container'>
        <div className='row'>
    <div className='col md-3'>

        
        <div class="card" style={{width:'400px',height:'600px'}}>
  <img src="preimg.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body" style={{display:'grid'}}>
    <h5 class="card-title">PREDICTION </h5>
    <p class="card-text">Enter features separated by commas to predict the value</p>

  
    <input type="text" onChange={handleInputChange} placeholder="Enter features separated by commas" />
    
    <button onClick={handlePredict}>Predict</button>
    {prediction && <div>Prediction: {prediction}</div>}
  </div></div> </div>
  <div className='col md-3'><h1 style={{fontSize:'3rem'}}>Prediction component</h1><p style={{fontSize:'2rem',textAlign:'center'}}><b> Detailed Description : </b>
  
The PredictionComponent has a text input for entering feature values separated by commas.
When the "Predict" button is clicked, the handlePredict function sends the input data to the backend Flask server.
The backend processes the data with a machine learning model and returns the prediction.
The prediction is displayed below the button.</p></div>
 </div>
</div>
      
    
  );
};

export default PredictionComponent;
