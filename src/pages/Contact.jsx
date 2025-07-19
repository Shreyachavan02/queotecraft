import React from 'react';

export default function Contact() {
  return (
    <div className="flex items-center justify-center p-10 min-h-[70vh]">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">Have feedback or questions?</p>
        <a href="mailto:info@inspireme.com" className="text-indigo-600 underline">
          info@inspireme.com
        </a>
      </div>
    </div>
  );
}
