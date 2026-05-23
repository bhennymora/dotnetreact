import { useEffect } from "react";
import type { Route } from "./+types/home";
import Crud from "~/welcome/crud";

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
      {/* Header */}
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">WaterIQ Manager</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="#about">
            Get Started
          </a>
        </div>
      </header>

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
                <p>We are team of talented designers making websites with Bootstrap</p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Watch Video</span>
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
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-circle"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i>{" "}
                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a href="#" className="read-more">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {[
                {
                  icon: "bi-activity",
                  title: "Lorem Ipsum",
                  desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
                  delay: "100",
                },
                {
                  icon: "bi-bounding-box-circles",
                  title: "Sed ut perspici",
                  desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
                  delay: "200",
                },
                {
                  icon: "bi-calendar4-week",
                  title: "Magni Dolores",
                  desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
                  delay: "300",
                },
                {
                  icon: "bi-broadcast",
                  title: "Nemo Enim",
                  desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
                  delay: "400",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className={`bi ${service.icon} icon`}></i>
                    </div>
                    <h4>
                      <a href="" className="stretched-link">
                        {service.title}
                      </a>
                    </h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {[
                {
                  img: "/assets/img/portfolio/portfolio-portrait-1.webp",
                  title: "App 1",
                  category: "filter-app",
                },
                {
                  img: "/assets/img/portfolio/portfolio-1.webp",
                  title: "Product 1",
                  category: "filter-product",
                },
                {
                  img: "/assets/img/portfolio/portfolio-3.webp",
                  title: "Branding 1",
                  category: "filter-branding",
                },
                {
                  img: "/assets/img/portfolio/portfolio-4.webp",
                  title: "App 2",
                  category: "filter-app",
                },
                {
                  img: "/assets/img/portfolio/portfolio-portrait-2.webp",
                  title: "Product 2",
                  category: "filter-product",
                },
                {
                  img: "/assets/img/portfolio/portfolio-portrait-3.webp",
                  title: "Branding 2",
                  category: "filter-branding",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <img src={item.img} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href={item.img}
                      title={item.title}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {[
                {
                  img: "/assets/img/person/person-m-7.webp",
                  name: "Walter White",
                  role: "Chief Executive Officer",
                  delay: "100",
                },
                {
                  img: "/assets/img/person/person-f-8.webp",
                  name: "Sarah Jhonson",
                  role: "Product Manager",
                  delay: "200",
                },
                {
                  img: "/assets/img/person/person-m-6.webp",
                  name: "William Anderson",
                  role: "CTO",
                  delay: "300",
                },
                {
                  img: "/assets/img/person/person-f-4.webp",
                  name: "Amanda Jepson",
                  role: "Accountant",
                  delay: "400",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay={member.delay}
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img src={member.img} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                      <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {[
                {
                  title: "Free Plan",
                  price: "0",
                  featured: false,
                  delay: "100",
                },
                {
                  title: "Business Plan",
                  price: "29",
                  featured: true,
                  delay: "200",
                },
                {
                  title: "Developer Plan",
                  price: "49",
                  featured: false,
                  delay: "300",
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-delay={plan.delay}
                >
                  <div className={`pricing-item ${plan.featured ? "featured" : ""}`}>
                    <h3>{plan.title}</h3>
                    <h4>
                      <sup>$</sup>
                      {plan.price}
                      <span> / month</span>
                    </h4>
                    <ul>
                      <li>
                        <i className="bi bi-check"></i>{" "}
                        <span>Quam adipiscing vitae proin</span>
                      </li>
                      <li>
                        <i className="bi bi-check"></i>{" "}
                        <span>Nec feugiat nisl pretium</span>
                      </li>
                      <li>
                        <i className="bi bi-check"></i>{" "}
                        <span>Nulla at volutpat diam uteera</span>
                      </li>
                      {(plan.featured || plan.price !== "0") && (
                        <li>
                          <i className="bi bi-check"></i>{" "}
                          <span>Pharetra massa massa ultricies</span>
                        </li>
                      )}
                      {plan.featured && (
                        <li>
                          <i className="bi bi-check"></i>{" "}
                          <span>Massa ultricies mi quis hendrerit</span>
                        </li>
                      )}
                    </ul>
                    <a href="#" className="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-wrap">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email-field"
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject-field"
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={10}
                        id="message-field"
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
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
                  <i className="bi bi-chevron-right"></i> <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#services">Services</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Product Management</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
              </p>
              <div className="social-links d-flex">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">WaterIQ Manager</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
      <Crud />

      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
