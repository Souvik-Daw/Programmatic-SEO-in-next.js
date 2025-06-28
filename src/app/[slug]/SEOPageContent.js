// components/SEOPageContent.js
'use client';

import '../style/page.css';

export default function SEOPageContent({ page }) {
  return (
    <>
      <nav className="nav">
        <div className="navbar-container">
          <a
            href="https://kodingcircle.in/contact"
            className="navbar-link"
          >
            Learn Coding or make your Dream Project, Contact Us
          </a>
        </div>
      </nav>

      <main className="main-content">
        <div className="layout">
          <aside className="aside">
            <h2>Contents</h2>
            <ul>
              {page.sections?.map((section, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx}`}>{section.heading}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content">
            <h1>{page.title}</h1>
            <p className="description">{page.description}</p>

            <div className="image-grid">
              <div className="left-image">
                <img
                  src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=387&auto=format&fit=crop"
                  alt="Left Image"
                />
              </div>
              <div className="right-images">
                <img
                  src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop"
                  alt="Top Right Image"
                />
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=870&auto=format&fit=crop"
                  alt="Bottom Right Image"
                  className="bottom-img"
                />
              </div>
            </div>

            <hr className="divider" />

            {page.sections?.map((section, idx) => (
              <section key={idx} id={`section-${idx}`} className="section">
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
                {section.links?.length > 0 && (
                  <ul>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        {link.href ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
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

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-col">
              <h2 className="footer-title">KodingCircle</h2>
              <p className="footer-text">
                We help you build your dream projects and master coding through real-world products, websites, and apps.
              </p>
              <a href="https://kodingcircle.in/contact" className="footer-button">
                Start Your Project →
              </a>
            </div>

            <div className="footer-col">
              <h3 className="footer-subtitle">Explore</h3>
              <ul className="footer-links">
                <li><a href="https://kodingcircle.in/about">About</a></li>
                <li><a href="https://kodingcircle.in/contact">Contact Us</a></li>
                <li><a href="https://kodingcircle.in/Portfolio">Portfolio</a></li>
                <li><a href="https://kodingcircle.in/Reviews">Review</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-subtitle">Let’s Collaborate</h3>
              <p className="footer-text">
                Got an idea? We’d love to hear from you and help you bring it to life.
              </p>
              <a href="https://kodingcircle.in/contact" className="footer-link">
                Contact Us →
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} KodingCircle. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
