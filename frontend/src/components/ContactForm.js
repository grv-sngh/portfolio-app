// frontend/src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('https://silver-happiness-jv9x5959v77cvqg-5000.app.github.dev/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Message:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
