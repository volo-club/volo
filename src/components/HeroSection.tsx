import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLandscape } from "@/hooks/use-landscape";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  const isLandscape = useLandscape();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle smooth scrolling for anchor links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  
  return (
    <section className={cn(
      "relative overflow-hidden",
      isLandscape ? "min-h-screen pt-20 pb-8" : "h-screen"
    )}>
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1920&auto=format&fit=crop')",
          transform: `translateY(${backgroundY}px)`,
          backgroundPosition: `center ${50 + scrollY * 0.05}%`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      
      {/* Content */}
      <div
        className={cn(
          "relative flex flex-col items-center text-center px-4",
          isLandscape 
            ? "h-full justify-start py-6" 
            : "h-full justify-center"
        )}
        style={{ transform: `translateY(${contentY}px)` }}
      >
        <div className={cn(
          "max-w-3xl animate-fade-in",
          isLandscape && "mt-4"
        )}>
          <span className="inline-block text-white/90 text-sm md:text-lg mb-2 md:mb-4 tracking-wide border-b border-white/30 pb-2">
            AI-powered trip planning
          </span>
          <h1 className={cn(
            "font-bold text-white mb-3 md:mb-6",
            isLandscape ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          )}>
            Plan <span className="text-[#E5DEFF]">Influencer‑Style</span> Trips
            {!isLandscape && <br className="hidden sm:block" />}
            {isLandscape ? " " : <br className="sm:hidden" />}
            on a <span className="text-[#D3E4FD]">Budget</span>
          </h1>
          <p className={cn(
            "text-white/90 mb-4 md:mb-8 max-w-2xl mx-auto",
            isLandscape ? "text-sm" : "text-base sm:text-lg"
          )}>
            AI-powered trip planning that makes dream vacations affordable and easy.
          </p>
          <div className={cn(
            "flex items-center justify-center gap-4",
            (isMobile || isLandscape) ? "flex-col w-full" : "flex-row"
          )}>
            <Button asChild size={isLandscape ? "default" : "lg"} variant="heroSolid" className={cn(
              "transform transition-all duration-300 hover:scale-105 hover:shadow-glow",
              (isMobile || isLandscape) ? "w-full" : "min-w-[200px]"
            )}>
              <Link to="/plan-trip">Plan Your Trip</Link>
            </Button>
            <Button asChild variant="hero" size={isLandscape ? "default" : "lg"} className={cn(
              "transform transition-all duration-300 hover:scale-105 hover:shadow-glow",
              (isMobile || isLandscape) ? "w-full" : "min-w-[200px]"
            )}>
              <Link to="/examples">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator with enhanced animation */}
      <div className={cn(
        "absolute left-1/2 transform -translate-x-1/2 text-white",
        isLandscape ? "bottom-1" : "bottom-10"
      )}>
        <a 
          href="#how-it-works" 
          onClick={(e) => scrollToSection(e, 'how-it-works')}
          className={cn(
            "flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity group",
            isLandscape && "scale-75"
          )}
        >
          <span className="text-sm mb-2 group-hover:translate-y-1 transition-transform duration-300">Discover More</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-pulse" />
        </a>
      </div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-50"
          />
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-100 [animation-delay:-4s]"
          />
        </svg>
      </div>
    </section>
  );
}
