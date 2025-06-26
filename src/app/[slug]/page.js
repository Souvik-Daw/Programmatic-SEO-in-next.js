import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Head from 'next/head';

export const dynamic = 'force-static';

const pages = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'data', 'pages.json'), 'utf8')
);

export async function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

// ✅ fix: await the slug
export default async function SEOPage(props) {
  const { slug } = await props.params; // 👈 Awaiting here is the key fix!

  const page = pages.find((p) => p.slug === slug);

  if (!page) return notFound();

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-lg text-gray-700">{page.description}</p>
      </div>
    </main>
  );
}
