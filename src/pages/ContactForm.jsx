import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    // Use Formspree for demo (replace with your own endpoint if needed)
    const res = await fetch('https://formspree.io/f/xleqzqzq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    });
    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 w-full max-w-md mx-auto mt-8">
      <h3 className="text-xl font-bold text-pink-600 mb-2">Contact Form</h3>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
      >
        Send
      </button>
      {status && <p className="text-sm text-center text-gray-500 mt-2">{status}</p>}
    </form>
  );
}
