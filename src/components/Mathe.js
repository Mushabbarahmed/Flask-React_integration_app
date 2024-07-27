// frontend/src/components/PredictionComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const Mathe = () => {
  const [inputData, setInputData] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

 
  const handleadd= async ()=>{
    try{
        // const features=inputData.split('+').map(Number)
        const features=inputData


        const response=await axios.post('http://localhost:5000/add', {
            add:features
        })
        setPrediction(response.data.addResult)
    }catch(error){
        setPrediction("Sorry input is not correct")
      console.error('Error making prediction:', error);
    }
  };    
  

  return (
    <div className='container'>
        <div className='row'>
    <div className='col md-4'>

         <div class="card" style={{width:'399px',height:'600px'}}>
  <img src="/addimg.jpeg" class="card-img-top" alt="..." />
  <div class="card-body" style={{display:'grid'}}>
    <h5 class="card-title">Mathematics Calculation </h5>
    <p class="card-text">Enter a mathematical expression (e.g., "100+10", "2*100")</p>

    <input type="text" onChange={handleInputChange} placeholder="Enter value ex:100+10,2*100" />
      <button onClick={handleadd}>Calculate</button>
      {prediction && <div>Result: {prediction}</div>}</div></div></div>
      <div className='col md-3'><h1 style={{fontSize:'2rem'}}>ADDITION component</h1><p style={{fontSize:'1.8rem',textAlign:'center'}}><b>Detailed Description : </b>
  
      Description
      This component, named "Mathematics Calculation," allows users to input mathematical expressions in the form of operations like addition, subtraction, multiplication, and division, separated by commas. Upon clicking the "Calculate" button, the input data is sent to the backend Flask server using an HTTP POST request. The backend processes the data and performs the requested mathematical operation. The result is then displayed below the button, providing users with the outcome of their mathematical expression</p></div>
 
  
</div></div>
      
  );
};

export default  Mathe
;
