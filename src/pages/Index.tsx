
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import { ArrowRight, MapPin, Zap, Clock, ShieldCheck, Edit, Users, Ticket, Plane } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Process Steps Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-neutral-600 text-lg">
              Planning your perfect trip in just four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tell us about your trip</h3>
              <p className="text-neutral-600">
                Fill in your destination, dates, and budget.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get an AI-planned itinerary</h3>
              <p className="text-neutral-600">
                Our AI creates a custom trip plan just for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Edit size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize & share</h3>
              <p className="text-neutral-600">
                Tweak the itinerary, invite friends to collaborate.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Plane size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & enjoy</h3>
              <p className="text-neutral-600">
                Book the best deals and get ready to travel!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Removing as we've created a new section above */}

      {/* Popular Destinations Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-neutral-600 text-lg">
              Get inspired by our most requested travel itineraries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Destination Card 1 */}
            <div className="card card-hover overflow-hidden group">
              <div className="relative h-64 bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/70"></div>
                <div className="absolute inset-0 bg-primary-300 flex items-center justify-center text-white">
                  Destination Image 1
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">Bali, Indonesia</span>
                  </div>
                  <h3 className="text-xl font-bold">Paradise Island Escape</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-neutral-600">7 days</span>
                  <span className="text-sm font-semibold text-primary-600">$1,200 - $2,800</span>
                </div>
                <p className="text-neutral-600 mb-4">
                  Beach retreats, temple visits, and jungle adventures in the Island of the Gods.
                </p>
                <button className="group-hover:bg-primary-50 w-full py-2 text-primary-600 font-medium rounded transition-colors duration-200 flex items-center justify-center">
                  Explore Itinerary
                  <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Destination Card 2 */}
            <div className="card card-hover overflow-hidden group">
              <div className="relative h-64 bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/70"></div>
                <div className="absolute inset-0 bg-accent-300 flex items-center justify-center text-white">
                  Destination Image 2
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">Tokyo, Japan</span>
                  </div>
                  <h3 className="text-xl font-bold">Urban Culture Immersion</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-neutral-600">5 days</span>
                  <span className="text-sm font-semibold text-primary-600">$1,500 - $3,000</span>
                </div>
                <p className="text-neutral-600 mb-4">
                  Modern city life, traditional temples, and futuristic technology experiences.
                </p>
                <button className="group-hover:bg-primary-50 w-full py-2 text-primary-600 font-medium rounded transition-colors duration-200 flex items-center justify-center">
                  Explore Itinerary
                  <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Destination Card 3 */}
            <div className="card card-hover overflow-hidden group">
              <div className="relative h-64 bg-neutral-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/70"></div>
                <div className="absolute inset-0 bg-primary-400 flex items-center justify-center text-white">
                  Destination Image 3
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">Santorini, Greece</span>
                  </div>
                  <h3 className="text-xl font-bold">Mediterranean Dream</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-neutral-600">6 days</span>
                  <span className="text-sm font-semibold text-primary-600">$1,800 - $3,500</span>
                </div>
                <p className="text-neutral-600 mb-4">
                  White-washed villages, stunning sunsets, and crystal blue waters of the Aegean.
                </p>
                <button className="group-hover:bg-primary-50 w-full py-2 text-primary-600 font-medium rounded transition-colors duration-200 flex items-center justify-center">
                  Explore Itinerary
                  <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="btn btn-outline">
              View All Destinations
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Plan Your Next Adventure?
            </h2>
            <p className="text-lg text-neutral-600">
              Join thousands of travelers who've already created their perfect trips with VOLO.
              Your influencer-worthy journey awaits!
            </p>
            <div className="pt-4">
              <button className="btn btn-primary">
                Start Planning for Free
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
