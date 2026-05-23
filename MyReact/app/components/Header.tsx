import { useEffect } from "react";

export function Header() {
  useEffect(() => {
    // Load main JS for mobile nav toggle
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
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

        <a className="btn-getstarted" href="/contacts">
          Get Started
        </a>
      </div>
    </header>
  );
}
