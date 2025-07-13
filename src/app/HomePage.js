'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage({ pages }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-[#111827] text-white min-h-screen py-12 px-6 sm:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">📈 Blog Posts</h1>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPages.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
            {/* <Link href={`/${page.slug}.html`} key={page.slug}> */} 
              <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 cursor-pointer">
                <h2 className="text-lg font-semibold mb-2">{page.title}</h2>
                <p className="text-sm line-clamp-3 text-gray-300">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-[#1f2937] text-white py-12 mt-20 rounded-xl">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* KodingCircle Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-2">KodingCircle</h2>
              <p className="text-gray-400 mb-4">
                We help you build your dream projects and master coding through real-world products, websites, and apps.
              </p>
              <a
                href="https://kodingcircle.in/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition duration-300"
              >
                Start Your Project →
              </a>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://kodingcircle.in/about" className="hover:text-white transition">About</a></li>
                <li><a href="https://kodingcircle.in/contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="https://kodingcircle.in/Portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="https://kodingcircle.in/Review" className="hover:text-white transition">Review</a></li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Let’s Collaborate</h3>
              <p className="text-gray-400">
                Got an idea? We’d love to hear from you and help you bring it to life.
              </p>
              <a
                href="https://kodingcircle.in/contact"
                className="text-blue-400 mt-3 inline-block hover:underline"
              >
                Contact Us →
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} KodingCircle. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
