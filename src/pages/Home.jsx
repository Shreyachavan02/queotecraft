import React, { useState } from 'react';
import { marathiQuotes, hindiQuotes, indianQuotes, englishQuotes } from '../quotes';
import Reviews from './Reviews';


export default function Home() {
  const allQuotes = [...marathiQuotes, ...hindiQuotes, ...indianQuotes, ...englishQuotes];
  const [quote, setQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const index = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[index];
  }

  return (
    <div className="px-4 py-8">
      {/* Improved Random Quote Generator */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center mb-10 border-l-8 border-indigo-400 relative animate-fade-in">
        <span className="absolute -left-6 top-6 text-4xl animate-bounce text-indigo-400">❝</span>
        <p className="text-2xl font-bold italic text-gray-900 transition-opacity duration-500">"{quote.text}"</p>
        <p className="mt-3 text-lg text-gray-600 font-medium">— {quote.author}</p>
        <div className="mt-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
            {(() => {
              if (marathiQuotes.includes(quote)) return 'Marathi';
              if (hindiQuotes.includes(quote)) return 'Hindi';
              if (indianQuotes.includes(quote)) return 'Indian';
              return 'English/World';
            })()}
          </span>
        </div>
        <button
          onClick={() => setQuote(getRandomQuote())}
          className="mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:from-indigo-600 hover:to-blue-600 transition font-semibold text-lg"
        >
          <span role="img" aria-label="refresh" className="mr-2">🔄</span>
          New Quote
        </button>
      </div>

      {/* Marathi Authors Section */}
      <h2 className="text-2xl font-bold text-center text-green-700 mb-2 mt-10">मराठी विचारवंत</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {marathiQuotes.map((q, i) => (
          <div key={i} className="bg-green-50 p-5 rounded-xl shadow border-l-4 border-green-400 hover:shadow-lg transition-transform flex flex-col">
            <span className="text-2xl mb-2">🖊️</span>
            <p className="italic text-gray-800 text-lg font-medium flex-1">"{q.text}"</p>
            <p className="text-right text-sm text-green-700 mt-2 font-semibold">- {q.author}</p>
          </div>
        ))}
      </div>

      {/* Hindi Authors Section */}
      <h2 className="text-2xl font-bold text-center text-red-700 mb-2 mt-10">हिंदी विचार</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {hindiQuotes.map((q, i) => (
          <div key={i} className="bg-red-50 p-5 rounded-xl shadow border-l-4 border-red-400 hover:shadow-lg transition-transform flex flex-col">
            <span className="text-2xl mb-2">🖊️</span>
            <p className="italic text-gray-800 text-lg font-medium flex-1">"{q.text}"</p>
            <p className="text-right text-sm text-red-700 mt-2 font-semibold">- {q.author}</p>
          </div>
        ))}
      </div>

      {/* Indian Authors Section */}
      <h2 className="text-2xl font-bold text-center text-orange-700 mb-2 mt-10">Indian Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {indianQuotes.map((q, i) => (
          <div key={i} className="bg-amber-50 p-5 rounded-xl shadow border-l-4 border-orange-400 hover:shadow-lg transition-transform flex flex-col">
            <span className="text-2xl mb-2">🖊️</span>
            <p className="italic text-gray-800 text-lg font-medium flex-1">"{q.text}"</p>
            <p className="text-right text-sm text-orange-700 mt-2 font-semibold">- {q.author}</p>
          </div>
        ))}
      </div>

      {/* English Authors Section */}
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2 mt-10">English & World Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {englishQuotes.map((q, i) => (
          <div key={i} className="bg-indigo-50 p-5 rounded-xl shadow border-l-4 border-indigo-400 hover:shadow-lg transition-transform flex flex-col">
            <span className="text-2xl mb-2">🖊️</span>
            <p className="italic text-gray-800 text-lg font-medium flex-1">"{q.text}"</p>
            <p className="text-right text-sm text-indigo-700 mt-2 font-semibold">- {q.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}