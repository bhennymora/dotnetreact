import { useEffect } from "react";

export function Footer() {
  
  return (
    <>
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
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}
