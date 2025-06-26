'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage({ pages }) {
  const [dark, setDark] = useState(false);

  return (
    <main className={`${dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen py-12 px-6 sm:px-12`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">📈 Programmatic SEO Pages</h1>
          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-4 py-1 border rounded-md"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>
              <div className={`${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 cursor-pointer border`}>
                <h2 className="text-lg font-semibold mb-2">{page.title}</h2>
                <p className="text-sm line-clamp-3">{page.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Kodingcircle. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
