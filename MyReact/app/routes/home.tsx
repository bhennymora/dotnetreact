import { useEffect } from "react";
import type { Route } from "./+types/home";
import { Header } from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WaterIQ Manager" },
    {
      name: "description",
      content: "WaterIQ Manager - Advanced Water Quality Monitoring and Management",
    },
  ];
}

// Load vendor scripts dynamically
function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function Home() {
  useEffect(() => {
    // Load vendor JS libraries
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    loadScript("/assets/vendor/aos/aos.js").then(() => {
      if (typeof window !== "undefined" && "AOS" in window) {
        (window as any).AOS.init();
      }
    });
    loadScript("/assets/vendor/glightbox/js/glightbox.min.js");
    loadScript("/assets/vendor/swiper/swiper-bundle.min.js");
    loadScript("/assets/vendor/waypoints/noframework.waypoints.js");
    loadScript("/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js");
    loadScript("/assets/vendor/isotope-layout/isotope.pkgd.min.js");
    loadScript("/assets/js/main.js");
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
                data-aos="zoom-out"
              >
                <h1>Better Solutions For Your Business</h1>
                <p>WaterIQ Manager - Advanced Water Quality Monitoring and Management System</p>
                <div className="d-flex">
                  <a href="/contacts" className="btn-get-started">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src="/assets/img/hero-img.png" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Data Management CTA Section */}
        <section id="crud" className="crud section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Data Management</h2>
            <p>Manage your contacts and messages efficiently</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3>Manage Contacts</h3>
                <p>Keep track of all your contacts with our easy-to-use contact management system. Add, edit, and delete contacts easily.</p>
                <a href="/contacts" className="btn btn-primary" style={{width: 'fit-content'}}>
                  Go to Contacts
                </a>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3>Manage Messages</h3>
                <p>Organize and manage your messages efficiently. Create, update, and delete messages with a simple interface.</p>
                <a href="/messages" className="btn btn-primary" style={{width: 'fit-content'}}>
                  Go to Messages
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="d-flex align-items-center">
                <span className="sitename">WaterIQ Manager</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contacts">Data Management</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Management</h4>
              <ul>
                <li>
                  <a href="/contacts">Contacts</a>
                </li>
                <li>
                  <a href="/messages">Messages</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <p>Stay updated with our latest developments</p>
              <div className="social-links d-flex">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>2025</span> <strong className="px-1">WaterIQ Manager</strong>
            <span>. All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by <a href="#">Your Company</a>
          </div>
        </div>
      </footer>
    </>
  );
}
