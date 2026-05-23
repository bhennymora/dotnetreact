import { useEffect } from "react";
import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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
                <div className="d-flex">
                  <a className="btn-getstarted" href="/contacts">
                    Go to Contacts
                  </a>
                </div>
                
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3>Manage Messages</h3>
                <p>Organize and manage your messages efficiently. Create, update, and delete messages with a simple interface.</p>
                <div className="d-flex">
                  <a className="btn-getstarted" href="/messages">
                    Go to Messages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
