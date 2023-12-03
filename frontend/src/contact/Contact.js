import React, { useState } from 'react';
import backlogo from '../assets/backlogo.png'
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(formData)
    // Handle form submission here (e.g., validation, API call, etc.)
    console.log('Form data:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (

    <>
    <div className='container'>
        <div className='left'>
            <img src={backlogo} alt='logo'/>
            <h2>Send Message, Feedback here</h2>
        </div>

    <form onSubmit={handleSubmit} className='right'>
      <h2>Contact US</h2>     
      <div className='in-box'>
        {/* <label htmlFor="name">Name</label> */}
        <input
        placeholder='Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          placeholder='Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Contact;
