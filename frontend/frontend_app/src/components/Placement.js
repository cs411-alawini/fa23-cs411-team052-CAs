import React, { useState } from 'react';
import Nav from './Navigation';
import axios from 'axios';
import './Placement.css';

function Placement() {
  const [formData, setFormData] = useState({
    student_id: '',
    user_id: '',
    password: '',
    email: '',
    name: '',
    hsc_percent: '',
    hsc_subject: '',
    ssc_percent: '',
    work_exp: '',
    undergrad_degree: '',
    gender: '',
    degree_percent: '',
    grad_percent: '',
    grad_degree: ''

  });
  const [placementResult, setPlacementResult] = useState(null);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [deleteResult, setDeleteResult] = useState(null);
  const handleDelete = async () => {
    // Prompt the user to enter their student_id
    const studentIdToDelete = prompt('Enter your student_id to confirm deletion:');
    
    if (!studentIdToDelete) {
      // User cancelled or entered an empty value
      return;
    }
    
    try {
      // Replace 'DELETE_ENDPOINT' with the actual endpoint for deleting entries
      const response = await axios.post('http://localhost:8000/delete', {
        user_id: studentIdToDelete,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log(response.data);
      setDeleteResult(response.data);
  
      // After successful deletion, reset the form data or perform any other necessary actions
      setFormData({
        student_id: '',
        user_id: '',
        password: '',
        email: '',
        name: '',
        hsc_percent: '',
        hsc_subject: '',
        ssc_percent: '',
        work_exp: '',
        undergrad_degree: '',
        gender: '',
        degree_percent: '',
        grad_percent: '',
        grad_degree: '',
      });
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Convert form data to JSON
      const jsonData = JSON.stringify(formData);
      
      // Replace the URL with your actual backend server address
      const response = await axios.post('http://localhost:8000/placement', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setPlacementResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="wrapper">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
      <Nav />
      <div className="form">
        <form onSubmit={handleSubmit}>
          {/* Add form fields with appropriate name attributes */}
            <label htmlfor="lname">PASSWORD:</label><br/>
            <input type="text" id="lname" name="password" value={formData.password} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">EMAIL:</label><br/>
            <input type="text" id="lname" name="email" value={formData.email} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">NAME:</label><br/>
            <input type="text" id="lname" name="name" value={formData.name} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">HSC_PERCENT:</label><br/>
            <input type="text" id="lname" name="hsc_percent" value={formData.hsc_percent} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">HSC_SUBJECT:</label><br/>
            <input type="text" id="lname" name="hsc_subject" value={formData.hsc_subject} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">SSC_PERCENT:</label><br/>
            <input type="text" id="lname" name="ssc_percent" value={formData.ssc_percent} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">WORK_EXP:</label><br/>
            <input type="text" id="lname" name="work_exp" value={formData.work_exp} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">UNDERGRAD_DEGREE:</label><br/>
            <input type="text" id="lname" name="undergrad_degree" value={formData.undergrad_degree} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">GENDER:</label><br/>
            <input type="text" id="lname" name="gender" value={formData.gender} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">DEGREE_PERCENT:</label><br/>
            <input type="text" id="lname" name="degree_percent" value={formData.degree_percent} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">GRAD_PERCENT:</label><br/>
            <input type="text" id="lname" name="grad_percent" value={formData.grad_percent} onChange={handleInputChange}/><br/><br/>
            <label htmlfor="lname">GRAD_DEGREE:</label><br/>
            <input type="text" id="lname" name="grad_degree" value={formData.grad_degree} onChange={handleInputChange}/><br/><br/>
          <button type="submit" onClick={handleSubmit}>Submit</button><br/><br/>
          <button type="button" onClick={handleDelete}>Delete</button>
        </form>
        {/*Display Placement or Delete Data*/}
        <div className="Results" style={{ marginTop: '100px', marginLeft: '10px' }}>
          <h2>Placement Results:</h2>
          {placementResult && (
            <pre>{JSON.stringify(placementResult, null, 2)}</pre>
          )}

          <h2>Delete Results:</h2>
          {deleteResult && (
            <pre>{JSON.stringify(deleteResult, null, 2)}</pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default Placement;