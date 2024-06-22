import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="col-lg-3 col-md-6 mb-4 flex flex-col items-center">
            <div className="footer-logo text-center mb-3 pl-5 ">
              <img src="logo3.png" alt="Life Flow Logo" className="h-20" />
            </div>
            <div className="text-center">
              <h3 className="mb-3 font-semibold text-white text-xl">
                "S A V E <span className="text-red-600"> L I F E</span>
              </h3>
              <h3 className="mb-3 font-semibold text-white text-xl">G I V E</h3>
              <h3 className="font-semibold text-red-600 text-xl">B L O O D"</h3>
              <button className="btn btn-danger shadow-lg rounded-pill mt-3">
                DONATE NOW
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-6 mb-4 footer-contact">
            <h3 id="contact-us" className="text-center text-2xl font-bold mb-6">
              Contact Us{" "}
            </h3>
            <div className="flex justify-center mb-2">
              <input
                type="text"
                placeholder="Full name"
                className="w-full py-2 px-4 rounded"
              />
            </div>
            <div className="flex justify-center mb-2">
              <input
                type="text"
                placeholder="Your email"
                className="w-full py-2 px-4 rounded"
              />
            </div>
            <div className="flex justify-center mb-2">
              <textarea
                name="message"
                placeholder="Your message"
                rows={3}
                className="w-full py-2 px-4 rounded"
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button className="btn btn-danger bg-green-600 shadow-lg rounded-full fw-bold w-48 py-2">
                Submit
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-center text-2xl font-bold mb-6">
              Connect With{" "}
            </h3>
            <div className="flex justify-center mb-4">
              <Link to="#">
                <img src="facebook.png" alt="Facebook" className="max-h-8" />
              </Link>
              <Link to="#">
                <img src="twitter.png" alt="Twitter" className="max-h-8 ml-4" />
              </Link>
              <Link to="https://www.instagram.com/lifeflow.ngo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img
                  src="instagram.png"
                  alt="Instagram"
                  className="max-h-8 ml-4"
                />
              </Link>
            </div>
            <div className="text-center">
              <h4 className="mb-2 font-semibold">Help@Lifeflow.tech</h4>
              <h4 className="mb-2">+91 9175960145</h4>
              <h4>2152XXXXXXXX</h4>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-center text-2xl font-bold mb-6">
              Quick Links{" "}
            </h3>
            <div className="footer-quick-links text-center">
              <h4 className="mb-2">
                <Link
                  to="/life flow website/About us page.html"
                  className="text-red-500"
                >
                  About Us
                </Link>
              </h4>
              <h4 className="mb-2">
                <Link
                  to="/life flow website/Donor pages.html"
                  className="text-red-500"
                >
                  Donor
                </Link>
              </h4>
              <h4>
                <Link
                  to="/life flow website/blog page.html"
                  className="text-red-500"
                >
                  Blog
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <h5 className="text-red-500">
            <Link
              to="/terms"
              className="text-red-500"
            >
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link
              to="privacy-policy"
              className="text-red-500"
            >
              Privacy Policy
            </Link>
          </h5>
          <h5>
            © 2024 LifeFlow. All rights reserved
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
