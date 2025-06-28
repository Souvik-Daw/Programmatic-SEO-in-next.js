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

export default async function SEOPage(props) {

  const { slug } = await props.params;
  const page = pages.find((p) => p.slug === slug);

  if (!page) return notFound();

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
      </Head>

      {/* Top Navbar */}
      <nav className="w-full bg-[#1f2937] py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <a
            href="https://kodingcircle.in/contact"
            className="text-white text-lg font-semibold hover:underline animate-navbar-glow"
          >
            Learn Coding or make your Dream Project, Contact Us
          </a>
        </div>
      </nav>

      <main className="bg-[#111827] text-white min-h-screen px-6 py-12 font-sans">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

          {/* LEFT: Table of Contents */}
          <aside className="lg:w-1/7 hidden lg:block sticky top-20 self-start">
            <h2 className="text-xl font-bold mb-4">Contents</h2>
            <ul className="space-y-2 text-blue-400 text-sm">
              {page.sections?.map((section, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx}`} className="hover:underline block">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT: Main Content */}
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold mb-2">{page.title}</h1>
            <p className="text-gray-400 mb-6">{page.description}</p>

            <div className="flex flex-col lg:flex-row gap-6 my-8">
              {/* Left Tall Image — Hidden on mobile */}
              <div className="w-full lg:w-1/3 hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=387&auto=format&fit=crop"
                  alt="blog page image left side coding development programming"
                  className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Right Side: Two Stacked Images */}
              <div className="w-full lg:w-2/3 flex flex-col gap-6">
                <img
                  src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop"
                  alt="blog page image top right side coding development programming"
                  className="w-full h-60 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=870&auto=format&fit=crop"
                  alt="blog page image bottom right side coding development programming"
                  className="w-full h-60 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hidden md:block"
                />
              </div>
            </div>

            <hr className="border-t border-gray-600 mb-6" />

            {page.sections?.map((section, idx) => (
              <section key={idx} id={`section-${idx}`} className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                <p className="text-gray-300">{section.content}</p>

                {section.links && section.links.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-blue-400">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        {link.href ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {link.text}
                          </a>
                        ) : (
                          link.text
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#1f2937] text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & CTA */}
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

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://kodingcircle.in/about" className="hover:text-white transition">About</a></li>
                <li><a href="https://kodingcircle.in/contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="https://kodingcircle.in/Portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="https://kodingcircle.in/Review" className="hover:text-white transition">Review</a></li>
              </ul>
            </div>

            {/* Optional: Newsletter or Contact Info */}
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

          <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} KodingCircle. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}



export async function generateMetadata( props ) {
  const { slug } = await props.params;
  const page = pages.find((p) => p.slug === slug);

  if (!page) return { title: 'Page Not Found' };

  return {
    title: page.title,
    description: page.description,
  };
}