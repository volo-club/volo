
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-600">VOLO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-neutral-700 hover:text-primary-600 font-medium">
            Home
          </Link>
          <Link to="/how-it-works" className="text-neutral-700 hover:text-primary-600 font-medium">
            How It Works
          </Link>
          <Link to="/destinations" className="text-neutral-700 hover:text-primary-600 font-medium">
            Destinations
          </Link>
          <Link to="/pricing" className="text-neutral-700 hover:text-primary-600 font-medium">
            Pricing
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 hover:text-primary-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/destinations"
              className="text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/pricing"
              className="text-neutral-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <button className="btn btn-outline w-full">Login</button>
              <button className="btn btn-primary w-full">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
