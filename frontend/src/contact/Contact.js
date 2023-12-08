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
            <div className='contact-icons'>
            {/* <i class="fa-brands fa-github"></i> */}
            <a href='/'><i class="fa-brands fa-square-github"></i></a>
            <a href='/'><i class="fa-brands fa-instagram"></i></a>
            <a href='/'><i class="fa-brands fa-square-facebook"></i></a>
            </div>
        </div>

    <form onSubmit={handleSubmit} className='right'>
      <h2>Contact US</h2>     
      <div className='in-box'>
        <input
        placeholder='Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className='in-box'>
        <input
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className='in-box'>
        <textarea
          placeholder='Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="message">Message</label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Contact;
