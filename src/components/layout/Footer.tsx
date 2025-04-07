
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">VOLO</span>
            </Link>
            <p className="text-neutral-400 text-sm">
              AI-powered trip planner for influencer-style travel on any budget.
              Plan your perfect getaway with personalized itineraries tailored to your preferences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center">
                  <ExternalLink size={14} className="mr-2" />
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-neutral-800 my-6" />
        
        <div className="text-center text-neutral-500 text-xs">
          <p>&copy; {currentYear} VOLO Travel Technology, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
