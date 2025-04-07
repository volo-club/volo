
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Award, Users, Lock, Star } from "lucide-react";

export default function TrustBadgesSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">
            {t.trustBadges.title}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {/* Media Mentions - Using grayscale filter for subtle appearance */}
          <div className="flex flex-col items-center">
            <div className="text-neutral-400 font-semibold text-lg mb-2">TravelMag</div>
            <p className="text-sm text-neutral-500">{t.trustBadges.featured}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-neutral-400 font-semibold text-lg mb-2">GlobeGuide</div>
            <p className="text-sm text-neutral-500">{t.trustBadges.endorsed}</p>
          </div>
          
          {/* Trust Badges with Icons */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center text-neutral-600">
              <Shield className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">{t.trustBadges.secure}</span>
            </div>
            <p className="text-sm text-neutral-500">{t.trustBadges.secureDesc}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center text-neutral-600">
              <Users className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">{t.trustBadges.users}</span>
            </div>
            <p className="text-sm text-neutral-500">{t.trustBadges.usersDesc}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-2 flex items-center text-neutral-600">
              <Star className="w-5 h-5 mr-2 text-primary-600 fill-primary-600" />
              <span className="font-medium">{t.trustBadges.rating}</span>
            </div>
            <p className="text-sm text-neutral-500">{t.trustBadges.ratingDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
