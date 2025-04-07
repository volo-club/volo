import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImg from "/assets/logo.png";

// Use hardcoded string for the logo as a temporary solution
// until we figure out the correct path
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center py-1 select-none focus:outline-none">
          <img 
            src={logoImg} 
            alt="VOLO Logo" 
            className="h-32 w-auto transition-transform hover:scale-105 pointer-events-none" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/how-it-works" className={cn(
            "font-medium transition-colors hover:text-primary-600 select-none focus:outline-none",
            scrolled ? "text-neutral-700" : "text-neutral-800 dark:text-white"
          )}>
            How It Works
          </Link>
          <Link to="/explore-trips" className={cn(
            "font-medium transition-colors hover:text-primary-600 select-none focus:outline-none",
            scrolled ? "text-neutral-700" : "text-neutral-800 dark:text-white"
          )}>
            Explore Trips
          </Link>
          <Link to="/about" className={cn(
            "font-medium transition-colors hover:text-primary-600 select-none focus:outline-none",
            scrolled ? "text-neutral-700" : "text-neutral-800 dark:text-white"
          )}>
            About
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className={cn(
              "font-medium px-4 py-2 transition-colors hover:text-primary-600 select-none focus:outline-none",
              scrolled ? "text-neutral-700" : "text-neutral-800 dark:text-white"
            )}
          >
            Log In
          </Link>
          <Link 
            to="/signup" 
            className={cn(
              "px-6 py-2 rounded-md font-medium transition-all select-none focus:outline-none",
              scrolled 
                ? "bg-accent-500 text-white hover:bg-accent-600" 
                : "bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-white/20 dark:text-white dark:backdrop-blur-sm dark:border dark:border-white/30 dark:hover:bg-white/30"
            )}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden transition-colors select-none focus:outline-none",
            scrolled ? "text-neutral-700" : "text-neutral-800 dark:text-white"
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-white/95 backdrop-blur-sm shadow-md animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="container py-6 flex flex-col space-y-6">
            <Link
              to="/how-it-works"
              className="text-neutral-700 hover:text-primary-600 font-medium py-3 text-lg border-b border-neutral-100 pb-3 select-none focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/explore-trips"
              className="text-neutral-700 hover:text-primary-600 font-medium py-3 text-lg border-b border-neutral-100 pb-3 select-none focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Trips
            </Link>
            <Link
              to="/about"
              className="text-neutral-700 hover:text-primary-600 font-medium py-3 text-lg border-b border-neutral-100 pb-3 select-none focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link 
                to="/login" 
                className="text-neutral-700 hover:text-primary-600 font-medium py-3 text-lg select-none focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-accent-500 text-white hover:bg-accent-600 px-6 py-3 rounded-md font-medium text-center text-lg mt-2 select-none focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
