import React, { useState } from 'react';
import { quotes } from '../quotes';

export default function Home() {
  const [quote, setQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }

  return (
    <div className="px-4 py-8">
      {/* Random Quote Generator */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 text-center mb-8">
        <p className="text-xl font-semibold italic">"{quote.text}"</p>
        <p className="mt-2 text-gray-600">— {quote.author}</p>
        <button
          onClick={() => setQuote(getRandomQuote())}
          className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          New Quote
        </button>
      </div>

      {/* Cards Section */}
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">More Inspirational Quotes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {quotes.map((q, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="italic text-gray-800">"{q.text}"</p>
            <p className="text-right text-sm text-gray-600 mt-2">- {q.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
