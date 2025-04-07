
import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">VOLO</span>
            </Link>
            <p className="text-neutral-600">
              AI-powered trip planner for influencer-style travel on any budget.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-600"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-600"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-600"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-600 hover:text-primary-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-neutral-600 hover:text-primary-600">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-neutral-600 hover:text-primary-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-600 hover:text-primary-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-600 hover:text-primary-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-neutral-600 hover:text-primary-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:hello@volo.travel"
                className="flex items-center text-neutral-600 hover:text-primary-600"
              >
                <Mail size={18} className="mr-2" />
                hello@volo.travel
              </a>
              <p className="text-neutral-600">
                123 Travel Street
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-neutral-200 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} VOLO Travel Technology, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
