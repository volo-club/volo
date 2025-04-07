
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to change navbar appearance when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300", 
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm" 
        : "bg-transparent py-5"
    )}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={cn(
            "text-2xl font-bold transition-colors", 
            isScrolled ? "text-primary-600" : "text-white"
          )}>VOLO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "font-medium transition-colors", 
              isScrolled 
                ? "text-neutral-700 hover:text-primary-600" 
                : "text-white/90 hover:text-white"
            )}
          >
            Home
          </Link>
          <Link 
            to="/how-it-works" 
            className={cn(
              "font-medium transition-colors", 
              isScrolled 
                ? "text-neutral-700 hover:text-primary-600" 
                : "text-white/90 hover:text-white"
            )}
          >
            How It Works
          </Link>
          <Link 
            to="/destinations" 
            className={cn(
              "font-medium transition-colors", 
              isScrolled 
                ? "text-neutral-700 hover:text-primary-600" 
                : "text-white/90 hover:text-white"
            )}
          >
            Destinations
          </Link>
          <Link 
            to="/pricing" 
            className={cn(
              "font-medium transition-colors", 
              isScrolled 
                ? "text-neutral-700 hover:text-primary-600" 
                : "text-white/90 hover:text-white"
            )}
          >
            Pricing
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className={cn(
            "btn transition-all", 
            isScrolled 
              ? "btn-outline border-primary-500 text-primary-500 hover:bg-primary-50" 
              : "border border-white/70 text-white hover:bg-white/20"
          )}>Login</button>
          <button className={cn(
            "btn transition-all", 
            isScrolled 
              ? "btn-primary bg-primary-500 text-white" 
              : "bg-white/90 hover:bg-white text-primary-700"
          )}>Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden hover:opacity-80 transition-opacity",
            isScrolled ? "text-neutral-700" : "text-white"
          )}
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
