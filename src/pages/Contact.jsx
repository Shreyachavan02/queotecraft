import React from 'react';

export default function Contact() {
  return (
    <div className="flex items-center justify-center p-10 min-h-[70vh] bg-gradient-to-br from-pink-50 to-indigo-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full border border-pink-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <svg className="w-20 h-20 text-pink-500 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7a5 5 0 0 0-10 0v1a5 5 0 0 0-10 0v9a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8zm-2 8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8z"/></svg>
            <span className="text-pink-600 font-bold text-lg">Contact</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-pink-600 mb-2">Contact Us</h2>
            <p className="text-gray-700 mb-4 text-lg">Have feedback, questions, or want to collaborate? We'd love to hear from you!<br/>Reach out using the options below:</p>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="mailto:info@inspireme.com" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-pink-500 transition text-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm10.5 8.25L3.75 6h16.5L12 12.75zm-9 7.5V7.125l8.25 6.75a1.5 1.5 0 0 0 1.5 0l8.25-6.75V19.5h-18z"/></svg>
                info@inspireme.com
              </a>
              <a href="https://github.com/Shreyachavan02" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition text-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <span className="text-gray-400 text-sm mt-2">We usually respond within 24 hours.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
