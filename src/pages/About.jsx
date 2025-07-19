import React from 'react';

export default function About() {
  return (
    <div className="flex items-center justify-center p-10 min-h-[70vh]">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">About InspireMe</h2>
        <p className="text-gray-700">
          InspireMe is a simple web app designed to motivate and uplift you with meaningful quotes.
          Built using React and Tailwind CSS, it's clean, lightweight, and accessible from any device.
        </p>
      </div>
    </div>
  );
}
