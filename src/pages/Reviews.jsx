import React from 'react';

const Reviews_config = [
  {
    name: 'Neha Panday',
    review: 'Great words!!!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Rahul Sharma',
    review: 'Very inspiring and motivating!',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Aisha Khan',
    review: 'Love the design and the quotes!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Vikram Patel',
    review: 'Simple, clean, and effective.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Priya Singh',
    review: 'I visit every day for a new quote!',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Anil Verma',
    review: 'A wonderful collection of quotes.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    name: 'Sita Devi',
    review: 'A beautiful way to start my day.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    name: 'Rohan Mehta',
    review: 'The quotes always lift my mood. Highly recommended!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    name: 'Sunita Joshi',
    review: 'A daily dose of inspiration for me and my friends.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
];

function Reviews() {
  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">What our viewers say...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Reviews_config.map((r, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
            <img src={r.avatar} alt={r.name} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-300 mb-3" />
            <div className="font-semibold text-indigo-800 text-lg mb-1">{r.name}</div>
            <div className="text-gray-700 italic mb-2">"{r.review}"</div>
            <div className="text-yellow-500 text-lg">
              {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;