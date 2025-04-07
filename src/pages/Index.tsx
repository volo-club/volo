
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Ready to Plan Your Next Adventure?
            </h2>
            <p className="text-lg text-neutral-700">
              Join thousands of travelers who've already created their perfect trips with VOLO.
              Your influencer-worthy journey awaits!
            </p>
            <div className="pt-4">
              <Button 
                variant="heroSolid" 
                size="lg" 
                className="text-base font-semibold px-8 py-6 h-auto"
              >
                Start Planning for Free
                <ArrowRight size={16} />
              </Button>
              <p className="text-sm text-neutral-600 mt-3">Takes less than 2 minutes to get your first itinerary!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
