
import React from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Droplets, Activity, Wifi, Coffee, Utensils, PanelTop, Wind, Shower } from "lucide-react";

export default function Amenities() {
  // Group amenities by category
  const amenitiesGroups = [
    {
      title: "Wellness",
      description: "Relax and rejuvenate during your stay",
      items: [
        { icon: <Heart className="h-5 w-5" />, name: "Spa services", description: "Professional massage and treatments" },
        { icon: <Droplets className="h-5 w-5" />, name: "Pool access", description: "Heated infinity pool with sea view" },
        { icon: <Activity className="h-5 w-5" />, name: "Yoga classes", description: "Daily morning sessions on the terrace" }
      ]
    },
    {
      title: "Connectivity",
      description: "Stay connected with modern amenities",
      items: [
        { icon: <Wifi className="h-5 w-5" />, name: "High-speed WiFi", description: "Fiber optic connection throughout" },
        { icon: <PanelTop className="h-5 w-5" />, name: "Smart TV", description: "55\" 4K display with streaming services" },
        { icon: <Coffee className="h-5 w-5" />, name: "Work space", description: "Ergonomic desk setup in each apartment" }
      ]
    },
    {
      title: "Comfort",
      description: "Premium comforts for a luxurious stay",
      items: [
        { icon: <Wind className="h-5 w-5" />, name: "Climate control", description: "Individual AC and heating systems" },
        { icon: <Utensils className="h-5 w-5" />, name: "Fully equipped kitchen", description: "Modern appliances and cookware" },
        { icon: <Shower className="h-5 w-5" />, name: "Luxury bathrooms", description: "Rain showers and premium amenities" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container max-w-5xl py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Premium Amenities
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Enjoy a comprehensive range of luxury amenities designed to enhance your stay
            and provide unmatched comfort and convenience.
          </p>
        </div>

        <div className="space-y-16">
          {amenitiesGroups.map((group, groupIdx) => (
            <div key={group.title} className="group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{group.title}</h2>
                  <p className="text-neutral-600">{group.description}</p>
                </div>
                <Badge variant="outline" className="self-start md:self-auto mt-2 md:mt-0">
                  {group.items.length} amenities
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {group.items.map((item, idx) => (
                  <div key={item.name} className="bg-white rounded-xl shadow-soft p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-primary-500">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold">{item.name}</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              {groupIdx < amenitiesGroups.length - 1 && (
                <Separator className="mt-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
