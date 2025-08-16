import React, { useState } from 'react';
import nodemailer from 'nodemailer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
      const mailOptions = {
        from: email,
to: 'michael@nuworld.cloud',
        subject: `Message from ${name}`,
        text: message,
      };

await transporter.sendMail(mailOptions).then((info) => {
  console.log('Email sent: ' + info.response);
}).catch((error) => {
  console.log('Error sending email: ' + error);
});
fetch('https://n8n.nuworld.cloud/webhook-test/5f0a6579-de03-4c45-a98d-7d1c48ec7b6b', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: name,
    email: email,
    message: message
  })
});
      setSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send</button>
      {sent && <p>Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;
