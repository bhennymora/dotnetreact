import { useEffect } from "react";


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

export  function Header() {
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
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">WaterIQ Manager</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/contacts">
                Contacts
              </a>
            </li>
            <li>
              <a href="/messages">
                Messages
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        
      </div>
    </header>
  );
}
